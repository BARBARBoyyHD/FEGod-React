import { useState } from "react";
import AlertToggle from "../components/button/AlertToggle";
import Alert from "../components/alert/Alert";
import AlertDialogToggle from "../components/button/AlertDialogToggle";
import AlertDialog from "../components/alert/AlertDialog";

export default function AlertPages() {
  const [alertIsOpen, setAlertIsOpen] = useState<boolean>(false);
  const [alertDialogOpen,setAlertDialogOpen] = useState<boolean>(false)
  return (
    <div className="h-screen w-full flex justify-center items-center flex-col gap-2">
      <h1>Alert and Alert dialog</h1>
      <div>
        <AlertToggle isOpen={alertIsOpen} setIsOpen={setAlertIsOpen} />
        <Alert isOpen={alertIsOpen} onClose={() => setAlertIsOpen(false)} />
      </div>
      <div>
        <AlertDialogToggle isOpen={alertDialogOpen} setIsOpen={setAlertDialogOpen} />
        <AlertDialog isOpen={alertDialogOpen} setIsOpen={setAlertDialogOpen} />
      </div>
    </div>
  );
}
