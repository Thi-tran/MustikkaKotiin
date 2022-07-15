import { getOrderContent } from "./orderList";
import { DELIVERY_FEE, getDeliveryMethodText, getOrderTotal, isDeliveryOrder, PICKUP_ADDRESS } from "./utils";

export const EmailTemplate = (orderList, delivery, orderNumber, deliveryAddress, number) => `
<div>
  <div style="text-align: left; text-align-last: auto;">
    <div style="margin: 0px auto; max-width: 600px;">
      <table
        align="center"
        border="0"
        cellpadding="0"
        cellspacing="0"
        role="presentation"
        style="width: 100%;"
      >
        <tbody>
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
                        <div
                          style="text-align: justify; text-align-last: center;"
                        >
                          <table
                            cellspacing="0"
                            cellpadding="0"
                            width="100%"
                            style="
                              border-collapse: collapse;
                              border-style: none;
                              margin: auto;
                            "
                          >
                            <tbody>
                              <tr>
                                <td valign="top" width="8%">
                                  <span style="line-height: 13px;">&nbsp;</span>
                                  <div
                                    style="
                                      text-align: left;
                                      text-align-last: auto;
                                    "
                                  ></div>
                                </td>
                                <td valign="top" width="84%">
                                  <div
                                    style="
                                      text-align: justify;
                                      text-align-last: center;
                                    "
                                  >
                                    <span style="height: 77;"
                                      ><img
                                        src="https://www.mustikkakotiin.fi/static/media/logo.60c89837.png"
                                        alt=""
                                        width="250"
                                        height="60"
                                        border="0"
                                        style="display: block; margin: 0 auto;"
                                        class="CToWUd"
                                    /></span>
                                  </div>
                                </td>
                                <td valign="top" width="8%">
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
                  </tbody>
                </table>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div style="text-align: left; text-align-last: auto;">
    <div style="margin: 0px auto; max-width: 600px;">
      <table
        align="center"
        border="0"
        cellpadding="0"
        cellspacing="0"
        role="presentation"
        style="width: 100%;"
      >
        <tbody>
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
                        <p
                          style="
                            border-top: solid 2px #e6e6e6;
                            font-size: 1;
                            margin: 0px auto;
                            width: 100%;
                          "
                        ></p>
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
                        <div style="text-align: left; text-align-last: auto;">
                          <span
                            style="
                              font-family: 'Elkjop Bodytext DemiBold', Arial;
                              font-size: 21px;
                              color: #000000;
                              font-style: normal;
                              font-weight: normal;
                              line-height: 21px;
                            "
                            >Kiitos tilauksestasi!</span
                          >
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div style="text-align: left; text-align-last: auto;">
    <div style="margin: 0px auto; max-width: 600px;">
      <table
        align="center"
        border="0"
        cellpadding="0"
        cellspacing="0"
        role="presentation"
        style="width: 100%;"
      >
        <tbody>
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
                          <span
                            style="
                              font-family: 'Elkjop Bodytext Regular', Arial;
                              font-size: 13px;
                              color: #000000;
                              font-style: normal;
                              font-weight: normal;
                              line-height: 13px;
                            "
                            >Olemme vastaanottaneet tilauksesi. Alla näet tiedot
                            toimituksistasi.</span
                          >
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div style="text-align: left; text-align-last: auto;">
    <div style="margin: 0px auto; max-width: 600px;">
      <table
        align="center"
        border="0"
        cellpadding="0"
        cellspacing="0"
        role="presentation"
        style="width: 100%;"
      >
        <tbody>
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
                class="m_2672516738427272184mj-column-per-50"
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
                          <span
                            style="
                              font-family: 'Elkjop Bodytext DemiBold', Arial;
                              font-size: 21px;
                              color: #72bf44;
                              font-style: normal;
                              font-weight: normal;
                              line-height: 21px;
                            "
                            >#<span class="il">Tilaus</span> ${orderNumber}</span
                          >
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div
                class="m_2672516738427272184mj-column-per-50"
                style="
                  direction: ltr;
                  display: inline-block;
                  font-size: 0px;
                  text-align: left;
                  vertical-align: top;
                  width: 100%;
                "
              ></div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div style="text-align: left; text-align-last: auto;">
    <div style="margin: 0px auto; max-width: 600px;">
      <table
        align="center"
        border="0"
        cellpadding="0"
        cellspacing="0"
        role="presentation"
        style="width: 100%;"
      >
        <tbody>
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
                        <p
                          style="
                            border-top: solid 2px #e6e6e6;
                            font-size: 1;
                            margin: 0px auto;
                            width: 100%;
                          "
                        ></p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div style="text-align: left; text-align-last: auto;">
    <div style="margin: 0px auto; max-width: 600px;">
      <table
        align="center"
        border="0"
        cellpadding="0"
        cellspacing="0"
        role="presentation"
        style="width: 100%;"
      >
        <tbody>
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
                          <span
                            style="
                              font-family: 'Elkjop Bodytext DemiBold', Arial;
                              font-size: 21px;
                              color: #000000;
                              font-style: normal;
                              font-weight: normal;
                              line-height: 21px;
                            "
                            >Varaa &amp; Nouda-palvelu: ${getDeliveryMethodText(delivery)}</span
                          >
                        </div>
                        <div><span style="font-size: 13px;">&nbsp;</span></div>
                        <div
                          style="text-align: left; text-align-last: auto;"
                        ></div>
                        <div style="text-align: left; text-align-last: auto;">
                          <span
                            style="
                              font-family: 'Elkjop Bodytext Regular', Arial;
                              font-size: 13px;
                              color: #000000;
                              font-style: normal;
                              font-weight: normal;
                              line-height: 13px;
                            "
                            >Soitamme numeroon ${number}, kun
                            pakettisi on saatavilla.</span
                          >
                        </div>
                        <div><span style="font-size: 21px;">&nbsp;</span></div>
                        <div
                          style="text-align: left; text-align-last: auto;"
                        ></div>
                        <div style="text-align: left; text-align-last: auto;">
                          <span
                            style="
                              font-family: 'Elkjop Bodytext DemiBold', Arial;
                              font-size: 21px;
                              color: #000000;
                              font-style: normal;
                              font-weight: normal;
                              line-height: 21px;
                            "
                            ><span class="il">Tilaus</span> vastaanotettu</span
                          >
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
                        <div style="text-align: left; text-align-last: auto;">
                          <img
                            src="https://ci5.googleusercontent.com/proxy/QVh5p5SXWTRfEjV_Kcr5_trJrQjvj4s3vGpxN9jfC1nnN7qgN5OqHjWw-CmSZUiDC8krdpsgEENHPVin6qmaSXZGRrldXytvZKkNIYOmmdgC4SHz8IjZUQAHtMzT2yYnW56v5_QnRK88c493s_WNFRdgePkqh3LH4iN17A6bOKVjt7MRsmg=s0-d-e1-ft#https://qlinks.elkjop.no/api/query/Messenger/ResourceQuery?BatchId=851756510&amp;SplitId=2068549&amp;ResourceId=ordered.png"
                            alt=""
                            width="100%"
                            height="auto"
                            border="0"
                            style="
                              border: none;
                              border-radius: 0;
                              display: block;
                              outline: none;
                              text-decoration: none;
                            "
                            class="CToWUd"
                          />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div style="text-align: left; text-align-last: auto;">
    <div style="margin: 0px auto; max-width: 600px;">
      <table
        align="center"
        border="0"
        cellpadding="0"
        cellspacing="0"
        role="presentation"
        style="width: 100%;"
      >
        <tbody>
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
                            ${getOrderContent(orderList)}
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
        </tbody>
      </table>
    </div>
  </div>
  <div style="text-align: left; text-align-last: auto;">
    <div style="margin: 0px auto; max-width: 600px;">
      <table
        align="center"
        border="0"
        cellpadding="0"
        cellspacing="0"
        role="presentation"
        style="width: 100%;"
      >
        <tbody>
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
                        <p
                          style="
                            border-top: solid 2px #e6e6e6;
                            font-size: 1;
                            margin: 0px auto;
                            width: 100%;
                          "
                        ></p>
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
                        <div style="text-align: left; text-align-last: auto;">
                          <table
                            cellspacing="0"
                            cellpadding="0"
                            width="100%"
                            style="
                              border-collapse: collapse;
                              border-style: none;
                              margin: auto;
                            "
                          >
                            <tbody>
                              <tr>
                                <td valign="top" width="25%">
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
                                        font-weight: normal;
                                        line-height: 13px;
                                      "
                                      >Välisumma:
                                    </span>
                                  </div>
                                </td>
                                <td valign="top" width="25%">
                                  <div
                                    style="
                                      text-align: right;
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
                                        font-weight: normal;
                                        line-height: 13px;
                                      "
                                      >${getOrderTotal(orderList)}</span
                                    >
                                  </div>
                                </td>
                                <td valign="top" width="30%">
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
                                <td valign="top" width="25%">
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
                                        font-weight: normal;
                                        line-height: 13px;
                                      "
                                      >Toimitusmaksu:</span
                                    >
                                  </div >
                                </td >
                                <td valign="top" width="25%">
                                  <div
                                    style="
                                      text-align: right;
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
                                        font-weight: normal;
                                        line-height: 13px;
                                      "
                                      >${isDeliveryOrder(delivery) ? DELIVERY_FEE : '0'}.00</span
                                    >
                                  </div>
                                </td>
                                <td valign="top" width="30%">
                                  <span style="line-height: 13px;">&nbsp;</span>
                                  <div
                                    style="
                                      text-align: left;
                                      text-align-last: auto;
                                    "
                                  ></div>
                                </td>
                              </tr >
  <tr>
    <td valign="top" width="25%">
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
        >Loppusumma:</span
        >
      </div>
    </td>
    <td valign="top" width="25%">
      <div
        style="
                                      text-align: right;
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
        >${isDeliveryOrder(delivery) ? (getOrderTotal(orderList) + DELIVERY_FEE).toFixed(2) : (getOrderTotal(orderList)).toFixed(2)}</span
        >
      </div>
    </td>
    <td valign="top" width="30%">
      <span style="line-height: 13px;">&nbsp;</span>
      <div
        style="
                                      text-align: left;
                                      text-align-last: auto;
                                    "
      ></div>
    </td>
  </tr>
                            </tbody >
                          </table >
                        </div >
                      </td >
                    </tr >
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
      <p
        style="
                            border-top: solid 2px #e6e6e6;
                            font-size: 1;
                            margin: 0px auto;
                            width: 100%;
                          "
      ></p>
    </td>
  </tr>
                  </tbody >
                </table >
              </div >
            </td >
          </tr >
        </tbody >
      </table >
    </div >
  </div >
  <div style="text-align: left; text-align-last: auto;">
    <div style="margin: 0px auto; max-width: 600px;">
      <table
        align="center"
        border="0"
        cellpadding="0"
        cellspacing="0"
        role="presentation"
        style="width: 100%;"
      >
        <tbody>
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
                            width="100%"
                            style="
                              border-collapse: collapse;
                              border-style: none;
                              margin: auto;
                            "
                          >
                            <tbody>
                              <tr>
                                <td valign="top" width="50%">
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
                                    >Toimitusosoite</span
                                    >
                                  </div>
                                </td>
                                <td valign="top" width="50%">
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
                                <td valign="top" colspan="2" width="100%">
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
                                        font-weight: normal;
                                        line-height: 13px;
                                      "
                                    >${isDeliveryOrder(delivery) ? deliveryAddress : PICKUP_ADDRESS}
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td valign="top" width="50%">
                                  <span style="line-height: 13px;">&nbsp;</span>
                                  <div
                                    style="
                                      text-align: left;
                                      text-align-last: auto;
                                    "
                                  ></div>
                                </td>
                                <td valign="top" width="50%">
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
                  </tbody>
                </table>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div >

  `