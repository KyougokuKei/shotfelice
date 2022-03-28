export default function sendmail(req, res) {
  let nodemailer = require("nodemailer");

  const data = req.body;
  const keys = req.body.keys.split(",");

  const guestMail = data[keys[7]];
  // const myMail = "kyougoku182@gmail.com";
  const myMail = "kimiham0606@gmail.com";

  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: myMail,
      pass: process.env.MAIL_PASSWARD,
    },
    secure: true,
  });

  // console.log(req.body);
  // console.log(keys);
  // console.log(req.body[keys[0]]);

  const toHostMailData = {
    from: guestMail,
    to: myMail,
    subject: `【お問い合わせ】${guestMail}様より`,
    text: `${guestMail}さんから、Shotfeliceに予約の申し込みがありました。`,
    html: getHostMailData(data, keys),
  };

  // ゲストに送る自動受付メール
  const toGuestMailData = {
    from: myMail,
    to: myMail,
    subject: `【予約の申し込み自動受付メール】`,
    text: "Shotfeliceに予約を申し込みました。",
    html: getGuestMailData(data, keys),
  };

  // 自分に送る自動受付メール
  transporter.sendMail(toHostMailData, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });

  // 　ゲストに送る自動受付メール
  transporter.sendMail(toGuestMailData, function (err, info) {
    if (err) {
      res.status(500).send(process.env.MAIL_PASSWARD);
    } else {
      console.log(info);
      res.status(200).send(info);
    }
  });

  // res.status(200).send("success");
}

const getHostMailData = (data, keys) => {
  const category = { title: keys[0], value: data[keys[0]] };
  const number_of_shots = { title: keys[1], value: data[keys[1]] };
  const place = { title: keys[2], value: data[keys[2]] };
  const phone = { title: keys[3], value: data[keys[3]] };
  const category_detail = { title: keys[4], value: data[keys[4]] };
  const data_type = { title: keys[5], value: data[keys[5]] };
  const date = { title: keys[6], value: data[keys[6]] };
  const mail = { title: keys[7], value: data[keys[7]] };

  return `
  <body
    style="
      background-color: #f6f6f6;
      font-family: sans-serif;
      -webkit-font-smoothing: antialiased;
      font-size: 14px;
      line-height: 1.4;
      margin: 0;
      padding: 0;
      -ms-text-size-adjust: 100%;
      -webkit-text-size-adjust: 100%;
    "
  >
    <span
      class="preheader"
      style="
        color: transparent;
        display: none;
        height: 0;
        max-height: 0;
        max-width: 0;
        opacity: 0;
        overflow: hidden;
        mso-hide: all;
        visibility: hidden;
        width: 0;
      "
      >${mail}さんから予約の申込みがありました。</span
    >
    <table
      role="presentation"
      border="0"
      cellpadding="0"
      cellspacing="0"
      class="body"
      style="
        border-collapse: separate;
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
        background-color: #f6f6f6;
        width: 100%;
      "
      width="100%"
      bgcolor="#f6f6f6"
    >
      <tr>
        <td
          style="font-family: sans-serif; font-size: 14px; vertical-align: top"
          valign="top"
        >
          &nbsp;
        </td>
        <td
          class="container"
          style="
            font-family: sans-serif;
            font-size: 14px;
            vertical-align: top;
            display: block;
            max-width: 580px;
            padding: 10px;
            width: 580px;
            margin: 0 auto;
          "
          width="580"
          valign="top"
        >
          <div
            class="content"
            style="
              box-sizing: border-box;
              display: block;
              margin: 0 auto;
              max-width: 580px;
              padding: 10px;
            "
          >
            <table
              style="
                border-spacing: 0;
                border-collapse: collapse;
                margin-top: 0;
                margin-right: auto;
                margin-bottom: 0;
                margin-left: auto;
              "
              width="100%"
              cellspacing="0"
              cellpadding="0"
              border="0"
              align="center"
            >
              <tbody>
                <tr>
                  <td style="word-break: break-word; border-collapse: collapse">
                    <center>
                      <div style="max-width: 200px">
                        <a
                          href="https://shotfelice.vercel.app/"
                          target="_blank"
                        >
                          <img
                            alt="Shotfelice"
                            style="
                              outline: none;
                              border-right-width: 0;
                              border-bottom-width: 0;
                              border-left-width: 0;
                              text-decoration: none;
                              border-top-width: 0;
                              display: block;
                              max-width: 100%;
                              line-height: 100%;
                              height: auto;
                              width: 480px;
                              margin: 10px 0;
                            "
                            src="https://shotfelice.vercel.app/img/general/title_logo.png"
                            class="CToWUd"
                            width="480"
                          />
                        </a>
                      </div>
                    </center>
                  </td>
                </tr>
              </tbody>
            </table>
            <!-- START CENTERED WHITE CONTAINER -->
            <table
              role="presentation"
              class="main"
              style="
                border-collapse: separate;
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
                background: #ffffff;
                border-radius: 3px;
                width: 100%;
              "
              width="100%"
            >
              <!-- START MAIN CONTENT AREA -->
              <tr>
                <td
                  class="wrapper"
                  style="
                    font-family: sans-serif;
                    font-size: 14px;
                    vertical-align: top;
                    box-sizing: border-box;
                    padding: 40px 40px;
                  "
                  valign="top"
                >
                  <table
                    role="presentation"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    style="
                      border-collapse: separate;
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      width: 100%;
                    "
                    width="100%"
                  >
                    <tr>
                      <td
                        style="
                          font-family: sans-serif;
                          font-size: 14px;
                          vertical-align: top;
                        "
                        valign="top"
                      >
                                              <p
                          style="
                            font-family: sans-serif;
                            font-size: 20px;
                            font-weight: normal;
                            margin: 0;
                            margin-bottom: 24px;
                          "
                        >
                          ${mail.value}さんからの撮影予約の申込みがありました。
                        </p>

                        <p
                          style="
                            font-family: sans-serif;
                            font-size: 14px;
                            font-weight: normal;
                            margin: 0;
                            margin-bottom: 32px;
                          "
                        >
                          以下の内容で予約の申し込みがありましたので、ご確認ください。
                        </p>


                        <p
                          style="
                            font-family: sans-serif;
                            font-size: 14px;
                            font-weight: normal;
                            margin: 0;
                            margin-bottom: 10px;
                          "
                        >
                          ${phone.title}
                        </p>
                        <p
                          style="
                            font-family: sans-serif;
                            font-size: 14px;
                            font-weight: normal;
                            margin: 0;
                            margin-bottom: 15px;
                            border-bottom: solid 1px #979797;
                          "
                        >
                          ${phone.value}
                        </p>
                        <p
                          style="
                            font-family: sans-serif;
                            font-size: 14px;
                            font-weight: normal;
                            margin: 0;
                            margin-bottom: 10px;
                          "
                        >
                          ${mail.title}
                        </p>
                        <p
                          style="
                            font-family: sans-serif;
                            font-size: 14px;
                            font-weight: normal;
                            margin: 0;
                            margin-bottom: 15px;
                            border-bottom: solid 1px #979797;
                          "
                        >
                          ${mail.value}
                        </p>

                        <p
                          style="
                            font-family: sans-serif;
                            font-size: 14px;
                            font-weight: normal;
                            margin: 0;
                            margin-bottom: 10px;
                          "
                        >
                          ${category.title}
                        </p>
                        <p
                          style="
                            font-family: sans-serif;
                            font-size: 14px;
                            font-weight: normal;
                            margin: 0;
                            margin-bottom: 15px;
                            border-bottom: solid 1px #979797;
                          "
                        >
                          ${category.value}
                        </p>
                        <p
                          style="
                            font-family: sans-serif;
                            font-size: 14px;
                            font-weight: normal;
                            margin: 0;
                            margin-bottom: 10px;
                          "
                        >
                          ${category_detail.title}
                        </p>
                        <p
                          style="
                            font-family: sans-serif;
                            font-size: 14px;
                            font-weight: normal;
                            margin: 0;
                            margin-bottom: 15px;
                            border-bottom: solid 1px #979797;
                          "
                        >
                          ${category_detail.value}
                        </p>
                        <p
                          style="
                            font-family: sans-serif;
                            font-size: 14px;
                            font-weight: normal;
                            margin: 0;
                            margin-bottom: 10px;
                          "
                        >
                          ${place.title}
                        </p>
                        <p
                          style="
                            font-family: sans-serif;
                            font-size: 14px;
                            font-weight: normal;
                            margin: 0;
                            margin-bottom: 15px;
                            border-bottom: solid 1px #979797;
                          "
                        >
                          ${place.value}
                        </p>
                        <p
                          style="
                            font-family: sans-serif;
                            font-size: 14px;
                            font-weight: normal;
                            margin: 0;
                            margin-bottom: 10px;
                          "
                        >
                          ${date.title}
                        </p>
                        <p
                          style="
                            font-family: sans-serif;
                            font-size: 14px;
                            font-weight: normal;
                            margin: 0;
                            margin-bottom: 15px;
                            border-bottom: solid 1px #979797;
                          "
                        >
                          ${date.value}
                        </p>
                        <p
                          style="
                            font-family: sans-serif;
                            font-size: 14px;
                            font-weight: normal;
                            margin: 0;
                            margin-bottom: 10px;
                          "
                        >
                          ${number_of_shots.title}
                        </p>
                        <p
                          style="
                            font-family: sans-serif;
                            font-size: 14px;
                            font-weight: normal;
                            margin: 0;
                            margin-bottom: 15px;
                            border-bottom: solid 1px #979797;
                          "
                        >
                          ${number_of_shots.value}
                        </p>
                        <p
                          style="
                            font-family: sans-serif;
                            font-size: 14px;
                            font-weight: normal;
                            margin: 0;
                            margin-bottom: 10px;
                          "
                        >
                          ${data_type.title}
                        </p>
                        <p
                          style="
                            font-family: sans-serif;
                            font-size: 14px;
                            font-weight: normal;
                            margin: 0;
                            margin-bottom: 15px;
                            border-bottom: solid 1px #979797;
                          "
                        >
                          ${data_type.value}
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <!-- END MAIN CONTENT AREA -->
            </table>
            <!-- END CENTERED WHITE CONTAINER -->

            <!-- START FOOTER -->
            <div
              class="footer"
              style="
                clear: both;
                margin-top: 10px;
                text-align: center;
                width: 100%;
              "
            >
              <table
                role="presentation"
                border="0"
                cellpadding="0"
                cellspacing="0"
                style="
                  border-collapse: separate;
                  mso-table-lspace: 0pt;
                  mso-table-rspace: 0pt;
                  width: 100%;
                "
                width="100%"
              >
                <tr>
                  <td
                    class="content-block"
                    style="
                      font-family: sans-serif;
                      vertical-align: top;
                      padding-bottom: 10px;
                      padding-top: 10px;
                      color: #999999;
                      font-size: 12px;
                      text-align: center;
                    "
                    valign="top"
                    align="center"
                  >
                    <a
                      href="https://shotfelice.com"
                      style="
                        color: #999999;
                        font-size: 12px;
                        text-align: center;
                      "
                      >Shotfelice</a
                    >
                    <span
                      class="apple-link"
                      style="
                        color: #999999;
                        font-size: 12px;
                        text-align: center;
                      "
                      >（ショットフェリーチェ）簡単・素早く写真を撮影！</span
                    >
                    <br>
                    <a href="https://shotfelice.vercel.app/contact"
                      style="
                        color: #999999;
                        font-size: 12px;
                        text-align: center;
                      "
                      >☎︎お問い合わせはこちら</a
                  </td>
                </tr>
              </table>
            </div>
            <!-- END FOOTER -->
          </div>
        </td>
        <td
          style="font-family: sans-serif; font-size: 14px; vertical-align: top"
          valign="top"
        >
          &nbsp;
        </td>
      </tr>
    </table>
  </body>`;
};

const getGuestMailData = (data, keys) => {
  const category = { title: keys[0], value: data[keys[0]] };
  const number_of_shots = { title: keys[1], value: data[keys[1]] };
  const place = { title: keys[2], value: data[keys[2]] };
  const phone = { title: keys[3], value: data[keys[3]] };
  const category_detail = { title: keys[4], value: data[keys[4]] };
  const data_type = { title: keys[5], value: data[keys[5]] };
  const date = { title: keys[6], value: data[keys[6]] };
  const mail = { title: keys[7], value: data[keys[7]] };

  return `
  <body
    style="
      background-color: #f6f6f6;
      font-family: sans-serif;
      -webkit-font-smoothing: antialiased;
      font-size: 14px;
      line-height: 1.4;
      margin: 0;
      padding: 0;
      -ms-text-size-adjust: 100%;
      -webkit-text-size-adjust: 100%;
    "
  >
    <span
      class="preheader"
      style="
        color: transparent;
        display: none;
        height: 0;
        max-height: 0;
        max-width: 0;
        opacity: 0;
        overflow: hidden;
        mso-hide: all;
        visibility: hidden;
        width: 0;
      "
      >Shotfeliceの撮影予約申請を確認しました。</span
    >
    <table
      role="presentation"
      border="0"
      cellpadding="0"
      cellspacing="0"
      class="body"
      style="
        border-collapse: separate;
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
        background-color: #f6f6f6;
        width: 100%;
      "
      width="100%"
      bgcolor="#f6f6f6"
    >
      <tr>
        <td
          style="font-family: sans-serif; font-size: 14px; vertical-align: top"
          valign="top"
        >
          &nbsp;
        </td>
        <td
          class="container"
          style="
            font-family: sans-serif;
            font-size: 14px;
            vertical-align: top;
            display: block;
            max-width: 580px;
            padding: 10px;
            width: 580px;
            margin: 0 auto;
          "
          width="580"
          valign="top"
        >
          <div
            class="content"
            style="
              box-sizing: border-box;
              display: block;
              margin: 0 auto;
              max-width: 580px;
              padding: 10px;
            "
          >
            <table
              style="
                border-spacing: 0;
                border-collapse: collapse;
                margin-top: 0;
                margin-right: auto;
                margin-bottom: 0;
                margin-left: auto;
              "
              width="100%"
              cellspacing="0"
              cellpadding="0"
              border="0"
              align="center"
            >
              <tbody>
                <tr>
                  <td style="word-break: break-word; border-collapse: collapse">
                    <center>
                      <div style="max-width: 200px">
                        <a
                          href="https://shotfelice.vercel.app/"
                          target="_blank"
                        >
                          <img
                            alt="Shotfelice"
                            style="
                              outline: none;
                              border-right-width: 0;
                              border-bottom-width: 0;
                              border-left-width: 0;
                              text-decoration: none;
                              border-top-width: 0;
                              display: block;
                              max-width: 100%;
                              line-height: 100%;
                              height: auto;
                              width: 480px;
                              margin: 10px 0;
                            "
                            src="https://shotfelice.vercel.app/img/general/title_logo.png"
                            class="CToWUd"
                            width="480"
                          />
                        </a>
                      </div>
                    </center>
                  </td>
                </tr>
              </tbody>
            </table>
            <!-- START CENTERED WHITE CONTAINER -->
            <table
              role="presentation"
              class="main"
              style="
                border-collapse: separate;
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
                background: #ffffff;
                border-radius: 3px;
                width: 100%;
              "
              width="100%"
            >
              <!-- START MAIN CONTENT AREA -->
              <tr>
                <td
                  class="wrapper"
                  style="
                    font-family: sans-serif;
                    font-size: 14px;
                    vertical-align: top;
                    box-sizing: border-box;
                    padding: 40px 40px;
                  "
                  valign="top"
                >
                  <table
                    role="presentation"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    style="
                      border-collapse: separate;
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      width: 100%;
                    "
                    width="100%"
                  >
                    <tr>
                      <td
                        style="
                          font-family: sans-serif;
                          font-size: 14px;
                          vertical-align: top;
                        "
                        valign="top"
                      >
                                              <p
                          style="
                            font-family: sans-serif;
                            font-size: 20px;
                            font-weight: normal;
                            margin: 0;
                            margin-bottom: 24px;
                          "
                        >
                          只今、撮影の予約を申請しています。
                        </p>
                        <p
                          style="
                            font-family: sans-serif;
                            font-size: 14px;
                            font-weight: normal;
                            margin: 0;
                            margin-bottom: 10px;
                          "
                        >
                          本日はご予約にご申し込み頂きまして、誠にありがとうございます。
                        </p>
                        <p
                          style="
                            font-family: sans-serif;
                            font-size: 14px;
                            font-weight: normal;
                            margin: 0;
                            margin-bottom: 10px;
                          "
                        >
                          メールの確認がとれ次第、こちらから折り返しお電話させていただきます。
                        </p>
                        <p
                          style="
                            font-family: sans-serif;
                            font-size: 14px;
                            font-weight: normal;
                            margin: 0;
                            margin-bottom: 32px;
                          "
                        >
                          また、以下の内容で予約の申し込みをしましたので、今一度確認をお願い
                          します。
                        </p>

                        <p
                          style="
                            font-family: sans-serif;
                            font-size: 14px;
                            font-weight: normal;
                            margin: 0;
                            margin-bottom: 10px;
                          "
                        >
                          ${category.title}
                        </p>
                        <p
                          style="
                            font-family: sans-serif;
                            font-size: 14px;
                            font-weight: normal;
                            margin: 0;
                            margin-bottom: 15px;
                            border-bottom: solid 1px #979797;
                          "
                        >
                          ${category.value}
                        </p>
                        <p
                          style="
                            font-family: sans-serif;
                            font-size: 14px;
                            font-weight: normal;
                            margin: 0;
                            margin-bottom: 10px;
                          "
                        >
                          ${category_detail.title}
                        </p>
                        <p
                          style="
                            font-family: sans-serif;
                            font-size: 14px;
                            font-weight: normal;
                            margin: 0;
                            margin-bottom: 15px;
                            border-bottom: solid 1px #979797;
                          "
                        >
                          ${category_detail.value}
                        </p>
                        <p
                          style="
                            font-family: sans-serif;
                            font-size: 14px;
                            font-weight: normal;
                            margin: 0;
                            margin-bottom: 10px;
                          "
                        >
                          ${place.title}
                        </p>
                        <p
                          style="
                            font-family: sans-serif;
                            font-size: 14px;
                            font-weight: normal;
                            margin: 0;
                            margin-bottom: 15px;
                            border-bottom: solid 1px #979797;
                          "
                        >
                          ${place.value}
                        </p>
                        <p
                          style="
                            font-family: sans-serif;
                            font-size: 14px;
                            font-weight: normal;
                            margin: 0;
                            margin-bottom: 10px;
                          "
                        >
                          ${date.title}
                        </p>
                        <p
                          style="
                            font-family: sans-serif;
                            font-size: 14px;
                            font-weight: normal;
                            margin: 0;
                            margin-bottom: 15px;
                            border-bottom: solid 1px #979797;
                          "
                        >
                          ${date.value}
                        </p>
                        <p
                          style="
                            font-family: sans-serif;
                            font-size: 14px;
                            font-weight: normal;
                            margin: 0;
                            margin-bottom: 10px;
                          "
                        >
                          ${number_of_shots.title}
                        </p>
                        <p
                          style="
                            font-family: sans-serif;
                            font-size: 14px;
                            font-weight: normal;
                            margin: 0;
                            margin-bottom: 15px;
                            border-bottom: solid 1px #979797;
                          "
                        >
                          ${number_of_shots.value}
                        </p>
                        <p
                          style="
                            font-family: sans-serif;
                            font-size: 14px;
                            font-weight: normal;
                            margin: 0;
                            margin-bottom: 10px;
                          "
                        >
                          ${data_type.title}
                        </p>
                        <p
                          style="
                            font-family: sans-serif;
                            font-size: 14px;
                            font-weight: normal;
                            margin: 0;
                            margin-bottom: 15px;
                            border-bottom: solid 1px #979797;
                          "
                        >
                          ${data_type.value}
                        </p>
                        <p
                          style="
                            font-family: sans-serif;
                            font-size: 14px;
                            font-weight: normal;
                            margin: 0;
                            margin-bottom: 10px;
                          "
                        >
                          ${phone.title}
                        </p>
                        <p
                          style="
                            font-family: sans-serif;
                            font-size: 14px;
                            font-weight: normal;
                            margin: 0;
                            margin-bottom: 15px;
                            border-bottom: solid 1px #979797;
                          "
                        >
                          ${phone.value}
                        </p>
                        <p
                          style="
                            font-family: sans-serif;
                            font-size: 14px;
                            font-weight: normal;
                            margin: 0;
                            margin-bottom: 10px;
                          "
                        >
                          ${mail.title}
                        </p>
                        <p
                          style="
                            font-family: sans-serif;
                            font-size: 14px;
                            font-weight: normal;
                            margin: 0;
                            margin-bottom: 15px;
                            border-bottom: solid 1px #979797;
                          "
                        >
                          ${mail.value}
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <!-- END MAIN CONTENT AREA -->
            </table>
            <!-- END CENTERED WHITE CONTAINER -->

            <!-- START FOOTER -->
            <div
              class="footer"
              style="
                clear: both;
                margin-top: 10px;
                text-align: center;
                width: 100%;
              "
            >
              <table
                role="presentation"
                border="0"
                cellpadding="0"
                cellspacing="0"
                style="
                  border-collapse: separate;
                  mso-table-lspace: 0pt;
                  mso-table-rspace: 0pt;
                  width: 100%;
                "
                width="100%"
              >
                <tr>
                  <td
                    class="content-block"
                    style="
                      font-family: sans-serif;
                      vertical-align: top;
                      padding-bottom: 10px;
                      padding-top: 10px;
                      color: #999999;
                      font-size: 12px;
                      text-align: center;
                    "
                    valign="top"
                    align="center"
                  >
                    <a
                      href="https://shotfelice.com"
                      style="
                        color: #999999;
                        font-size: 12px;
                        text-align: center;
                      "
                      >Shotfelice</a
                    >
                    <span
                      class="apple-link"
                      style="
                        color: #999999;
                        font-size: 12px;
                        text-align: center;
                      "
                      >（ショットフェリーチェ）簡単・素早く写真を撮影！</span
                    >
                    <br>
                    <a href="https://shotfelice.vercel.app/contact"
                      style="
                        color: #999999;
                        font-size: 12px;
                        text-align: center;
                      "
                      >☎︎お問い合わせはこちら</a
                  </td>
                </tr>
              </table>
            </div>
            <!-- END FOOTER -->
          </div>
        </td>
        <td
          style="font-family: sans-serif; font-size: 14px; vertical-align: top"
          valign="top"
        >
          &nbsp;
        </td>
      </tr>
    </table>
  </body>`;
};
