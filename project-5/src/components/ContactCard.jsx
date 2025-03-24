import { deleteDoc, doc } from "firebase/firestore";
import { HiOutlineUserCircle } from "react-icons/hi";
import { IoMdTrash } from "react-icons/io";
import { RiEditCircleLine } from "react-icons/ri";
import { db } from "../config/firebase";
import AddAndUpdateContact from "./AddAndUpdateContact";
import useDisclouse from "../hooks/useDisclouse";
import { toast } from "react-toastify";

const ContactCard = ({ contact }) => {
  const { isOpen, onClose, onOpen } = useDisclouse();

  const deleteContact = async (id) => {
    try {
      await deleteDoc(doc(db, "contacts", id));
      toast.success("Contact Deleted Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div
  key={contact.id}
  className="mb-4 flex items-center justify-between rounded-lg bg-yellow-100 p-3 shadow-md"
>
  {/* Thông tin liên hệ */}
  <div className="flex items-start gap-3">
    <HiOutlineUserCircle className="text-4xl text-orange-400" />
    <div>
      <h2 className="text-lg font-semibold text-gray-800">{contact.name}</h2>
      <p className="text-sm text-gray-600">{contact.email}</p>

      {/* Hiển thị password nếu có */}
      <p className={`text-sm mt-1 ${contact.password ? "block" : "hidden"}`}>
        {contact.password}
      </p>
    </div>
  </div>

  {/* Icon Sửa/Xóa */}
  <div className="flex items-center gap-3 text-2xl text-gray-600">
    <RiEditCircleLine
      onClick={onOpen}
      className="cursor-pointer hover:text-blue-500 transition duration-200"
    />
    <IoMdTrash
      onClick={() => deleteContact(contact.id)}
      className="cursor-pointer text-orange-500 hover:text-red-500 transition duration-200"
    />
  </div>
</div>

{/* Modal Update */}
<AddAndUpdateContact
  contact={contact}
  isUpdate
  isOpen={isOpen}
  onClose={onClose}
/>

    </>
  );
};

export default ContactCard;
