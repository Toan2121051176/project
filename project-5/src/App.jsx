import Navbar from "./components/Navbar";
import { FiSearch } from "react-icons/fi";
import { AiFillPlusCircle } from "react-icons/ai";
import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "./config/firebase";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ContactCard from "./components/ContactCard";
import AddAndUpdateContact from "./components/AddAndUpdateContact";
import useDisclouse from "./hooks/useDisclouse";
import NotFoundContact from "./components/NotFoundContact";
import './index.css';


const App = () => {
  const [contacts, setContacts] = useState([]);

  const { isOpen, onClose, onOpen } = useDisclouse();

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");

        onSnapshot(contactsRef, (snapshot) => {
          const contactLists = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          setContacts(contactLists);
          return contactLists;
        });
      } catch (error) {
        console.log(error);
      }
    };

    getContacts();
  }, []);

  const filterContacts = (e) => {
    const value = e.target.value;

    const contactsRef = collection(db, "contacts");

    onSnapshot(contactsRef, (snapshot) => {
      const contactLists = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      const filteredContacts = contactLists.filter((contact) =>
        contact.name.toLowerCase().includes(value.toLowerCase())
      );

      setContacts(filteredContacts);

      return filteredContacts;
    });
  };

  return (
    <div className="bg-red-500 text-white p-4 text-center">
  Nếu nền này màu đỏ, Tailwind đã hoạt động!
</div>

  //   <><div className="mx-auto max-w-2xl px-6 py-8 bg-gray-100 rounded-lg shadow-md">
  //   <Navbar />
  //   <div className="flex gap-3 mb-6">
  //     <div className="relative flex flex-grow items-center">
  //       <FiSearch className="absolute left-3 text-xl text-gray-500" />
  //       <input
  //         onChange={filterContacts}
  //         type="text"
  //         placeholder="Tìm kiếm liên hệ..."
  //         className="h-12 w-full rounded-lg border border-gray-300 bg-white pl-10 text-gray-700 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
  //       />
  //       <AiFillPlusCircle
  //       onClick={onOpen}
  //       className="cursor-pointer text-5xl text-blue-500 hover:text-blue-700 transition duration-300"
  //     />
  //     </div>
  //   </div>
  
  //   <div className="mt-4 flex flex-col gap-4">
  //     {contacts.length <= 0 ? (
  //       <NotFoundContact />
  //     ) : (
  //       contacts.map((contact) => (
  //         <ContactCard key={contact.id} contact={contact} />
  //       ))
  //     )}
  //   </div>
  // </div>
  // <ToastContainer position="bottom-center" />
  // <AddAndUpdateContact onClose={onClose} isOpen={isOpen} />  
  //   </>
  );
};

export default App;