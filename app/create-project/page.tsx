import Modal from "@/components/Modal"
import ProjectForm from "@/components/ProjectForm"
import { getCurrentUser } from "@/lib/session"
import { BsCaretRightFill } from "react-icons/bs"
import { redirect } from "next/navigation";

const CreateProject = async () => {

  const session = await getCurrentUser();

  if(!session?.user) redirect('/');

  return (
    <Modal>
      <h3 className="modal-head-text flexCenter font-rubik">
        <BsCaretRightFill className="text-orange-500" />
        Create a New Project
      </h3>

      <ProjectForm type="create" session={session} />
    </Modal>
  )
}

export default CreateProject