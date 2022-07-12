const getProductImage = (order) => {
  switch (order.title) {
    case '5kg laatikko':
      return 'https://s3.eu-north-1.amazonaws.com/www.mustikkakotiin.fi/img/5kg-box-nobg.jpg';
    case '3kg laatikko':
      return 'https://s3.eu-north-1.amazonaws.com/www.mustikkakotiin.fi/img/3kg-box-nobg.jpg';
    default: return ''
  }
}

export const getOrderContent = (orderList) => {
  let text = '';
  orderList.forEach(order => {
    if (!order.order) return;
    text += `
  <tr>
    <td
      style="
        direction: ltr;
        font-size: 0px;
        padding: 0px 0px 0px 0px;
        text-align: center;
      "
    >
      <div
        class="m_2672516738427272184mj-column-per-100"
        style="
          direction: ltr;
          display: inline-block;
          font-size: 0px;
          text-align: left;
          vertical-align: top;
          width: 100%;
        "
      >
        <table
          border="0"
          cellpadding="0"
          cellspacing="0"
          role="presentation"
          style="vertical-align: top;"
          width="100%"
        >
          <tbody>
            <tr>
              <td
                align="left"
                style="
                  font-size: 0px;
                  padding: 10px 10px 10px 10px;
                  padding-bottom: 10px;
                  padding-left: 10px;
                  padding-right: 10px;
                  padding-top: 10px;
                  word-break: break-word;
                "
              >
                <div style="text-align: left; text-align-last: auto;">
                  <table
                    cellspacing="0"
                    cellpadding="0"
                    width="98%"
                    style="
                      border-collapse: collapse;
                      border-style: none;
                      margin: auto;
                    "
                  >
                    <tbody>
                      <tr>
                        <td valign="top" rowspan="4" width="30%">
                          <div
                            style="
                              text-align: left;
                              text-align-last: auto;
                            "
                          >
                            <span style="height: auto;"
                              ><img
                                src=${getProductImage(order)}
                                alt=""
                                width="100%"
                                height="auto"
                                border="0"
                                style="
                                  display: block;
                                  margin-left: 0;
                                  margin-right: auto;
                                "
                                class="CToWUd"
                            /></span>
                          </div>
                        </td>
                        <td valign="top" width="6%">
                          <span style="line-height: 13px;">&nbsp;</span>
                          <div
                            style="
                              text-align: left;
                              text-align-last: auto;
                            "
                          ></div>
                        </td>
                        <td valign="top" colspan="2" width="86%">
                          <div
                            style="
                              text-align: left;
                              text-align-last: auto;
                            "
                          >
                            <span
                              style="
                                font-family: Arial, Arial;
                                font-size: 13px;
                                color: #191919;
                                font-style: normal;
                                font-weight: normal;
                                line-height: 13px;
                              "
                              >${order.title}</span
                            >
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td valign="top" width="6%">
                          <span style="line-height: 13px;">&nbsp;</span>
                          <div
                            style="
                              text-align: left;
                              text-align-last: auto;
                            "
                          ></div>
                        </td>
                        <td valign="top" width="28%">
                          <span style="line-height: 13px;">&nbsp;</span>
                          <div
                            style="
                              text-align: left;
                              text-align-last: auto;
                            "
                          ></div>
                        </td>
                        <td valign="top" width="58%">
                          <span style="line-height: 13px;">&nbsp;</span>
                          <div
                            style="
                              text-align: left;
                              text-align-last: auto;
                            "
                          ></div>
                        </td>
                      </tr>
                      <tr>
                        <td valign="top" width="6%">
                          <span style="line-height: 13px;">&nbsp;</span>
                          <div
                            style="
                              text-align: left;
                              text-align-last: auto;
                            "
                          ></div>
                        </td>
                        <td valign="top" width="28%">
                          <div
                            style="
                              text-align: left;
                              text-align-last: auto;
                            "
                          >
                            <span
                              style="
                                font-family: 'Elkjop Bodytext Regular',
                                  Arial;
                                font-size: 13px;
                                color: #000000;
                                font-style: normal;
                                font-weight: bold;
                                line-height: 13px;
                              "
                              >${order.price}</span
                            >
                          </div>
                        </td>
                        <td valign="top" width="58%">
                          <div
                            style="
                              text-align: left;
                              text-align-last: auto;
                            "
                          >
                            <span
                              style="
                                font-family: 'Elkjop Bodytext Regular',
                                  Arial;
                                font-size: 13px;
                                color: #000000;
                                font-style: normal;
                                font-weight: bold;
                                line-height: 13px;
                              "
                              >Määrä: ${order.order}</span
                            >
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td valign="top" width="6%">
                          <span style="line-height: 13px;">&nbsp;</span>
                          <div
                            style="
                              text-align: left;
                              text-align-last: auto;
                            "
                          ></div>
                        </td>
                        <td valign="top" width="28%">
                          <span style="line-height: 13px;">&nbsp;</span>
                          <div
                            style="
                              text-align: left;
                              text-align-last: auto;
                            "
                          ></div>
                        </td>
                        <td valign="top" width="58%">
                          <span style="line-height: 13px;">&nbsp;</span>
                          <div
                            style="
                              text-align: left;
                              text-align-last: auto;
                            "
                          ></div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </td>
            </tr>
            <tr>
              <td
                align="left"
                style="
                  font-size: 0px;
                  padding: 10px 10px 10px 10px;
                  padding-bottom: 10px;
                  padding-left: 10px;
                  padding-right: 10px;
                  padding-top: 10px;
                  word-break: break-word;
                "
              >
                <span style="line-height: 13px;">&nbsp;</span>
                <div
                  style="text-align: left; text-align-last: auto;"
                ></div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </td>
  </tr>

    `
  })

  return text;
}