import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import * as React from "react";
import MessMembersInput from "../../features/mess/create-mess/mess-members-input";
import MessName from "../../features/mess/create-mess/mess-name";
import CreateMessStepper from "../stepper/create-mess-stepper";

interface Props {
  open: boolean;
  handleClose: () => void;
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  borderRadius: "0.5rem",
  overflow: "auto",
  maxHeight: { xs: "90vh", md: "80vh" },
  minWidth: { xs: "90vw", md: "20vw" },
};

interface MessState {
  name: string;
  phone: string;
  address: string;
  members: string[];
}

export default function CreateMessModal({ open, handleClose }: Props) {
  const [type, settype] = React.useState("text");
  const [name, setName] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [members, setMembers] = React.useState<string[]>([]);

  const [mess, setMess] = React.useState<MessState>({
    name: "",
    phone: "",
    address: "",
    members: [],
  });

  React.useEffect(() => {
    setMess({
      name: name,
      phone: phone,
      address: address,
      members: members,
    });
  }, [name, phone, address, members]);

  const steps = [
    {
      label: "What is your mess name?",
      description: <MessName value={name} setValue={setName} />,
    },
    {
      label: "Enter mess phone number",
      description: <MessName type="number" value={phone} setValue={setPhone} />,
    },
    {
      label: "Enter mess address",
      description: <MessName value={address} setValue={setAddress} />,
    },
    {
      label: "Add members",
      description: (
        <MessMembersInput members={members} setMembers={setMembers} />
      ),
    },
  ];
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          ".MuiModal-backdrop": {
            backgroundColor: "rgba(107, 122, 144, 0.2)",
            backdropFilter: "blur(4px)",
            transition: "all 0.3s ease",
            transitionDelay: "0.1s",
            transitionProperty: "background-color, backdrop-filter",
          },
        }}
      >
        <Box sx={style}>
          <CreateMessStepper steps={steps} mess={mess} />
        </Box>
      </Modal>
    </div>
  );
}
