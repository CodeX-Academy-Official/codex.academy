import axios from "axios";

export async function sendToHubspot(
  portalId: string,
  formId: string,
  payload: any
) {
  const fields = [
    ...Object.keys(payload).map((key) => ({
      name: key.toLowerCase(),
      value: payload[key],
    })),
  ];

  const hubspotFormat = {
    submittedAt: Date.now(), // This millisecond timestamp is optional. Update the value from "1517927174000" to avoid an INVALID_TIMESTAMP error.
    fields,
    context: {
      pageUri: "codex.academy/enroll",
      pageName: "Application",
    },
    // legalConsentOptions: {
    //   consent: {
    //     // Include this object when GDPR options are enabled
    //     consentToProcess: true,
    //     text:
    //       "I agree to allow Example Company to store and process my personal data.",
    //     communications: [
    //       {
    //         value: true,
    //         subscriptionTypeId: 999,
    //         text:
    //           "I agree to receive marketing communications from Example Company."
    //       }
    //     ]
    //   }
    // }
  };
  const url = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`;
  const result = await axios.post(url, hubspotFormat);
  return result;
}
