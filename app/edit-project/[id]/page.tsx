import Modal from "@/components/Modal"
import ProjectForm from "@/components/ProjectForm"
import { getCurrentUser } from "@/lib/session"
import { BsCaretRightFill } from "react-icons/bs"
import { redirect } from "next/navigation";
import { getProjectDetails } from "@/lib/actions";
import { ProjectInterface } from "@/common.types";

const EditProject = async ({ params: { id }}: { params: { id: string }}) => {

  const session = await getCurrentUser();

  if(!session?.user) redirect('/');

  const result = await getProjectDetails(id) as { project?: ProjectInterface }

  return (
    <Modal>
      <h3 className="modal-head-text flexCenter font-rubik">
        <BsCaretRightFill className="text-orange-500" />
        Edit your Project
      </h3>

      <ProjectForm type="edit" session={session} project={result?.project} />
    </Modal>
  )
}

export default EditProject