"use client";

import { ProjectInterface, SessionInterface } from "@/common.types";
import Image from "next/image";
import { ChangeEvent, useState } from "react";
import FormField from "./FormField";
import { Filters } from "@/constant";
import CustomMenu from "./CustomMenu";
import Button from "./Button";
import { createNewProject, fetchToken, updateProject } from "@/lib/actions";
import { useRouter } from "next/navigation";

type Props = {
  type: string,
  session: SessionInterface,
  project?: ProjectInterface,
}

const ProjectForm = ({ type, session, project }: Props) => {

  const router = useRouter();

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const [form, setForm] = useState({
    title: project?.title || '',
    description: project?.description || '',
    liveSiteUrl: project?.liveSiteUrl || '',
    image: project?.image || '',
    githubUrl: project?.githubUrl || '',
    category: project?.category || '',
  });

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);

    const { token } = await fetchToken();

    try {
      if(type === 'create') {
        await createNewProject(form, session?.user?.id, token);

        router.push('/');
      }

      if(type === 'edit') {
        await updateProject(form, project?.id as string, token);

        router.push('/');
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const file = e.target.files?.[0];

    if(!file) return;

    if(!file.type.includes('image')) {
      return alert('Please upload an image file.');
    }

    const reader = new FileReader();

    reader.readAsDataURL(file);
    
    reader.onload = () => {
      const result = reader.result as string;
      handleStateChange('image', result);
    };
  };

  const handleStateChange = (fieldName: string, value: string) => {
    setForm((prevState) => (
      { ...prevState, [fieldName]: value }
    ))
  };

  return (
    <form onSubmit={handleFormSubmit} className="flexStart form">
      <div className="flexStart form_image-container">
        <label htmlFor="poster" className="flexCenter form_image-label underline underline-offset-4 decoration-orange-500">
          {!form.image && 'Choose a poster or thumbnail for your project'}
        </label>
        <input
          id="image"
          type="file"
          accept="image/*"
          required={type === 'create'}
          className="form_image-input"
          onChange={handleChangeImage} 
        />
        {form.image && (
          <Image 
            src={form?.image}
            className="sm:p-10 object-contain z-20"
            alt="project poster"
            fill
          />
        )}
      </div>

      <FormField
        title="Title"
        state={form.title}
        placeholder="GeekGazette built using NextJS 13" 
        setState={(value) => handleStateChange('title', value)}
      />

      <FormField
        title="Description"
        state={form.description}
        placeholder="GeekGazette is a platform to learn and share the knowledge. It serves as a hub for tech enthusiast to learn and share their work in the emerging tech world." 
        setState={(value) => handleStateChange('description', value)}
      />

      <FormField
        type="url"
        title="Project Live URL"
        state={form.liveSiteUrl}
        placeholder="https://www.geekgazette.org" 
        setState={(value) => handleStateChange('liveSiteUrl', value)}
      />

      <FormField
        type="url"
        title="Github Repository URL"
        state={form.githubUrl}
        placeholder="https://www.github.com/geekgazette-nextjs-13" 
        setState={(value) => handleStateChange('githubUrl', value)}
      />  

      <CustomMenu
        title="Project Category"
        state={form.category}
        filters={Filters}
        setState={(value) => handleStateChange('category', value)} 
      />

      <div className="flexStart w-full">
        <Button
          title={
            isSubmitting 
            ? `${type === 'create' ? 'Creating Project' : 'Editing Project'}`
            : `${type === 'create' ? 'Create Project' : 'Edit Project'}`
          }
          type="submit"
          leftIcon={isSubmitting ? "" : '/plus.svg'}
          isSubmitting={isSubmitting} 
        />
      </div>
    </form>
  )
}

export default ProjectForm