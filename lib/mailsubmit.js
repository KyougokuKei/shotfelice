export const reservationSubmit = (e, data, setIsSending) => {
  e.preventDefault();
  console.log("送信中");
  setIsSending(true);
  fetch("/api/contact", {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => {
    if (res.status === 200) {
      console.log("送信が成功しました");
      window.location.href = "/reservation/step5";
      setIsSending(false);
    } else {
      alert(
        "送信に失敗しました。メールアドレスが正しいか確認してください。もし、それでも失敗した場合は、お手数ですが、お問い合わせフォームよりお問い合わせください。"
      );
      setIsSending(false);
    }
  });
};

export const msgSubmit = (e, data, setIsSending, setIsSuccess) => {
  e.preventDefault();
  console.log("送信中");
  setIsSending(true);
  fetch("/api/mail", {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => {
    if (res.status === 200) {
      console.log("送信が成功しました");
      setIsSending(false);
      setIsSuccess(true);
    } else {
      alert(
        "送信に失敗しました。メールアドレスが正しいか確認してください。もし、それでも失敗した場合は、お手数ですが、お問い合わせフォームよりお問い合わせください。"
      );
      setIsSending(false);
    }
  });
};
