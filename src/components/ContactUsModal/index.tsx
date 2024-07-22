import React, { useEffect, useState } from "react";
import {
  Modal,
  Backdrop,
  Fade,
  Button,
  TextField,
  Box,
  IconButton,
} from "@mui/material";
import { setModal, setToast, useGlobal } from "../../contexts";
import { brandName } from "../../constants";
import { Image } from "../Image";
import CloseIcon from "@mui/icons-material/Close";
// import ReCAPTCHA from "react-google-recaptcha";

interface ContactUsModalProps {
  open: boolean;
  onClose: () => void;
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
  borderRadius: 10,
};

const ContactUsModal: React.FC<ContactUsModalProps> = ({ open, onClose }) => {
  // const SITE_KEY = `6LfjnncpAAAAAFP6mfvIc_mrMBXsnm5_qqmRFoXw`;
  // const SITE_KEY = `6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI`; //dev
  // const [captchVal, setCaptchaVal] = useState(false);
  const { state, dispatch } = useGlobal();
  const { name, address, body, modalLogo } = state;
  const [values, setValues] = useState({
    fullName: "",
    email: "",
    mobile: "",
    subject: name,
    message: body,
  });
  const [logo, setLogo] = useState(modalLogo);
  useEffect(() => setLogo(modalLogo), [modalLogo]);
  useEffect(() => {
    setValues({ ...values, subject: name, message: body });
  }, [name, body]);
  const { fullName, email, mobile, subject: msgSubject, message } = values;

  const handleChange = (e: any) => {
    setValues({ ...values, [e.currentTarget.name]: e.currentTarget.value });
  };
  return (
    <Modal
      open={open}
      onClose={() => {
        onClose();
      }}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{ timeout: 500 }}
    >
      <Fade in={open}>
        <Box sx={{ ...style, width: { md: 400, xs: 350 } }}>
          <Box sx={{ textAlign: "center" }}>
            <Image
              src={logo}
              alt={brandName}
              height="100"
              loading="lazy"
              sx={{
                filter: "drop-shadow(10px 7px 10px #cead00)",
                borderRadius: "unset",
              }}
            />
          </Box>
          <h3>Fill the form and let us assist you better</h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const submitData = `name=${fullName.trim()}&email=${email.trim()}&mobile=${mobile.trim()}&subject=${`${msgSubject}`.trim()}&body=${`${message}%0D%0A%0D%0A${name}%0D%0A${address}%0D%0A`.trim()}&href=${window.location.href.trim()}`;
              fetch(
                `${window.location.origin}/api/addrequest.php?${submitData}`,
                {
                  method: "GET",
                }
              )
                .then(() => dispatch(setToast(true)))
                .catch((error) => {
                  console.error(error);
                });
              dispatch(setModal(false));
            }}
          >
            <TextField
              label="Full Name"
              name="fullName"
              value={fullName}
              onChange={handleChange}
              fullWidth
              sx={{ marginBottom: 2 }}
              required
              size="small"
            />
            <TextField
              label="Email"
              name="email"
              value={email}
              onChange={handleChange}
              fullWidth
              sx={{ marginBottom: 2 }}
              type={"email"}
              size="small"
            />
            <TextField
              label="Mobile"
              name="mobile"
              value={mobile}
              onChange={handleChange}
              fullWidth
              sx={{ marginBottom: 2 }}
              required
              inputProps={{maxLength:13}}
              size="small"
            />
            {/* <TextField
              label="Subject"
              name="subject"
              value={msgSubject}
              onChange={handleChange}
              fullWidth
              sx={{ marginBottom: 2 }}
              size="small"
            />
            <TextField
              label="Message"
              name="message"
              value={message}
              onChange={handleChange}
              fullWidth
              sx={{ marginBottom: 2 }}
              multiline
              rows={5}
              size="small"
            /> */}
            {/* <ReCAPTCHA
              sitekey={SITE_KEY}
              onChange={(val) => setCaptchaVal(!!val)}
            /> */}
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              // disabled={!captchVal}
            >
              Request a callback
            </Button>
            <IconButton
              sx={{
                position: "absolute",
                right: 20,
                bottom: 25,
              }}
              color="primary"
              onClick={onClose}
            >
              <CloseIcon />
            </IconButton>
          </form>
        </Box>
      </Fade>
    </Modal>
  );
};

export default ContactUsModal;
