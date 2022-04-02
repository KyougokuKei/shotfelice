import { useState } from "react";
import {
  Box,
  MotionDiv,
  MotionInput,
  MotionTextarea,
} from "../styles/components";
import { PageTransition } from "../components/PageTransition";
import Image from "next/image";
import { Cclock, Cmail, Cphone } from "../public/img/contact/";
import { loadYaml } from "../lib/posts";
import { Modal } from "../components/Modal";
import { Button, BackButton } from "../components/Button";
import { msgSubmit } from "../lib/mailsubmit";
import { SendingAnimation } from "../components/SendingAnimation";
import { Send } from "../public/img/svg";

export const getStaticProps = async () => {
  const postData = await loadYaml("contact.yml");
  return {
    props: {
      data: postData,
    },
  };
};

export default function Contact({ data }) {
  const [isVisible, setIsVisible] = useState(false);
  const [mailAddress, setMailAddress] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  return (
    <PageTransition>
      <Modal
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        opacity={0.4}
        sytle={{ width: "100%" }}
      >
        {!isSuccess && (
          <MsgForm
            mailAddress={mailAddress}
            setMailAddress={setMailAddress}
            message={message}
            setMessage={setMessage}
            setIsVisible={setIsVisible}
            isSuccess={isSuccess}
            setIsSuccess={setIsSuccess}
            data={data}
          />
        )}
        {isSuccess && <Success msg={data.success} />}
      </Modal>

      <Box
        width="100vw"
        height={["auto", "calc(100vh - 80px)"]}
        position="relative"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box position="absolute" left={0} right="0" width="100%" height="100%">
          <Image
            src="/img/general/contact.jpg"
            alt="background_image"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </Box>
        <Box
          display="flex"
          flexDirection={["column", "row"]}
          alignItems="center"
          justifyContent="center"
          my={[40, 0, 0]}
          width="100vw"
          px={10}
        >
          {/* ------ 1. 営業時間 ------ */}
          <Card>
            <Cclock />
            <Box mb={14} mt={20} fontSize={24}>
              {data.business_hours.title}
            </Box>
            <Box fontSize={14} letterSpacing={0.88} lineHeight="1.43">
              <Box mb={4}>{data.business_hours.weekday}</Box>
              <Box>{data.business_hours.holidays}</Box>
            </Box>
          </Card>

          {/* ------ 2. 電話番号 ------ */}
          <Card>
            <Box
              as="a"
              href={"tel:" + data.phone.phone_number}
              onClick={[() => log("sm"), () => log("lg")]}
              display="flex"
              alignItems="center"
              justifyContent="center"
              flexDirection="column"
            >
              <Cphone />
              <Box mb={14} mt={20} fontSize={24}>
                {data.phone.title}
              </Box>
              <Box mb={15} borderBottom="solid 1px #aaa" fontSize={18}>
                {data.phone.phone_number}
              </Box>
              <Box fontSize={14} letterSpacing={0.88} lineHeight="1.43">
                {data.phone.caution[0]} <Br />
                {data.phone.caution[1]}
              </Box>
            </Box>
          </Card>

          {/* ------ 3. メール ------ */}
          <Card last>
            <MotionDiv
              display="flex"
              alignItems="center"
              justifyContent="center"
              flexDirection="column"
              onClick={() => setIsVisible(!isVisible)}
              style={{ cursor: "pointer" }}
              whileHover={{ opacity: 0.6 }}
              transition={{ duration: 0.15 }}
            >
              <Cmail />
              <Box
                mb={15}
                mt={20}
                fontSize={24}
                borderBottom="solid 1px #cecece"
              >
                {data.mail.send_btn_msg}
              </Box>

              <Box
                fontSize={14}
                letterSpacing={0.88}
                lineHeight="1.43"
                maxWidth={300}
                px={20}
              >
                {data.mail.caution}
              </Box>
            </MotionDiv>
          </Card>
        </Box>
      </Box>
    </PageTransition>
  );
}

function Success(props) {
  return (
    <MotionDiv
      width="100%"
      minWidth={320}
      maxWidth={600}
      display="flex"
      alignItems="center"
      justifyContent="flex-start"
      flexDirection="column"
      backgroundColor="white"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.3 }}
      p={40}
      py={100}
    >
      <Send />
      <Box fontWeight="normal" fontSize={24} my={20}>
        {props.msg.title}
      </Box>
      <Box textAlign="center" lineHeight={1.6}>
        {props.msg.message}
      </Box>
    </MotionDiv>
  );
}

function MsgForm(props) {
  var pattern =
    /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]+.[A-Za-z0-9]+$/;
  const isValid = pattern.test(props.mailAddress);
  const [isSubmitting, setIsSubmitting] = useState(false);
  return (
    <MotionDiv
      width="100%"
      minWidth={320}
      maxWidth={600}
      display="flex"
      alignItems="center"
      justifyContent="flex-start"
      flexDirection="column"
      backgroundColor="white"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.3 }}
      p={20}
    >
      <MotionTextarea
        width="100%"
        p={20}
        mb={14}
        placeholder="ここにお問合せ・質問内容などをご記載ください。"
        rows={6}
        style={{ outline: "none" }}
        border="solid 1px #eee"
        whileFocus={{ border: "1px solid #777", scale: 1.02 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        value={props.message}
        onChange={(e) => props.setMessage(e.target.value)}
      />
      <MotionInput
        width="100%"
        p={20}
        mb={14}
        placeholder="メールアドレス"
        rows={6}
        style={{ outline: "none" }}
        border="solid 1px #eee"
        whileFocus={{ border: "1px solid #777", scale: 1.02 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        value={props.mailAddress}
        onChange={(e) => props.setMailAddress(e.target.value)}
      />

      {!isValid && !(props.mailAddress === "") && (
        <Box mr={"auto"} fontSize={12} color="red">
          メールアドレスが正しいかご確認ください。
        </Box>
      )}
      <Box
        display="flex"
        alignItems="center"
        justifyContent="flex-end"
        width="100%"
      >
        <BackButton
          href="/"
          onClick={(e) => {
            e.preventDefault();
            props.setIsVisible(false);
          }}
          border="none"
          mr={20}
          height={45}
          fontSize={16}
        >
          {props.data.mail.modal_cancel_btn_msg}
        </BackButton>
        <Button
          href="/"
          onClick={(e) => {
            e.preventDefault();
            if (!isValid || props.mailAddress === "") {
              alert("メールアドレスが不正です。");
            } else {
              msgSubmit(
                e,
                { mailAddress: props.mailAddress, message: props.message },
                setIsSubmitting,
                props.setIsSuccess
              );
            }
          }}
          height={45}
          fontSize={16}
        >
          {props.data.mail.modal_send_btn_msg}
        </Button>
      </Box>
      <SendingAnimation isSending={isSubmitting} />
    </MotionDiv>
  );
}

function Card(props) {
  return (
    <MotionDiv
      width={[320, 320, 380]}
      height={[320, 320, 380]}
      backgroundColor="white"
      display="flex"
      alignItems="center"
      justifyContent={["center", "flex-start", "flex-start"]}
      flexDirection="column"
      textAlign="center"
      pt={[0, 70, 100]}
      mr={[0, props.last ? 0 : 10, props.last ? 0 : 10]}
      mb={[10, 0, 0]}
      whileHover={{ scale: 1.02 }}
      zIndex={1}
    >
      {props.children}
    </MotionDiv>
  );
}

function Br() {
  return (
    <Box display={["inline", "inline", "none"]}>
      <br />
    </Box>
  );
}
