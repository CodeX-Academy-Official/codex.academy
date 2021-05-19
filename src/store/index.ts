import Vue from "vue";
import Vuex, { ActionContext } from "vuex";
import VuexPersistence from "vuex-persist";
import { shuffle } from "./utils";
import { sendToHubspot } from "./hubspot";
import { sendToApi } from "./api";
import { testimonials } from "./testimonials";
import { pillars } from "./pillars";
import { technologies } from "./technologies";
import { internationalPlans, bootcampFeatures } from "./plans";
import { pathways } from "./pathways";
import { certifications } from "./certifications";
import { internshipPartners } from "./internshipPartners";
import { paymentTypes } from "./paymentTypes";
import { countries } from "./countries";
import { Plan } from "@/types/Plan";

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});

Vue.use(Vuex);

const ENROLL = "ENROLL";
const SET_START_DATE = "SET_START_DATE";
const SET_PROMO_CODES = "SET_PROMO_CODES";
const PAY_APP_FEE = "PAY_APP_FEE";
const SET_ACTIVE_PLAN = "SET_ACTIVE_PLAN";
const SCHEDULE_CARD_PAYMENT = "SCHEDULE_CARD_PAYMENT";
const SET_PRICE_CLASS = "SET_PRICE_CLASS";
const SET_PROGRAM_TITLE = "SET_PROGRAM_TITLE";
const RESET = "RESET";
const SET_SOURCE = "SET_SOURCE";
const SET_AUDIENCE = "SET_AUDIENCE";

async function sendToApiWithTracking(url: string, payload: any) {
  try {
    return await sendToApi(url, payload);
  } catch (error) {
    const v: any = Vue;
    v.rollbar.error(error);
    throw error;
  }
}

async function sendToHubspotAndTrackErrors(
  portalId: string,
  formId: string,
  payload: any
) {
  try {
    return await sendToHubspot(portalId, formId, payload);
  } catch (error) {
    const v: any = Vue;
    v.rollbar.error(error);
    throw error;
  }
}
async function sendApplication({ context, applicant, hsForm }: any) {
  const formId = hsForm || "56d6a407-24b7-4a6b-be49-45d4dbc6eea5";
  const source = context.state.source || "none";
  const applicantWithId = { ...applicant, learnerId: Date.now(), source };
  context.commit(ENROLL, applicantWithId);
  await sendToHubspotAndTrackErrors("7092117", formId, applicantWithId);
}

export default new Vuex.Store({
  state: {
    testMode: false,
    startDate: false,
    applicant: undefined,
    promoCodes: [],
    appFeePaid: undefined,
    paymentInfo: undefined,
    priceClass: undefined,
    activePlan: undefined,
    source: "CodeX Academy April 2020",
    audience: "",
  },
  mutations: {
    [RESET](state: any) {
      state.applicant = null;
      state.activePlan = null;
    },
    [SCHEDULE_CARD_PAYMENT](state: any, paymentInfo) {
      state.paymentInfo = paymentInfo;
    },
    [SET_ACTIVE_PLAN](state: any, plan) {
      state.activePlan = plan;
    },
    [ENROLL](state: any, applicant) {
      state.applicant = applicant;
    },
    [SET_START_DATE](state: any, startDate) {
      state.startDate = startDate;
    },
    [SET_SOURCE](state: any, source: string) {
      state.source = source;
    },
    [SET_PROMO_CODES](state: any, promoCodes) {
      state.promoCodes = promoCodes;
    },
    [PAY_APP_FEE](state: any) {
      state.appFeePaid = new Date();
    },
    [SET_PRICE_CLASS](state: any, priceClass: string) {
      state.priceClass = priceClass;
    },
    [SET_PROGRAM_TITLE](state: any, title: string) {
      state.programTitle = title;
    },
    [SET_AUDIENCE](state: any, audience: string) {
      state.audience = audience;
    },
  },
  actions: {
    reset({ commit }) {
      commit(RESET);
    },
    async sendBaaSInterestForm(_context, info) {
      await sendToApiWithTracking(
        "https://hooks.zapier.com/hooks/catch/6492165/bo2os43/",
        info
      );
    },
    setPriceClass(context, priceClass: string) {
      context.commit(SET_PRICE_CLASS, priceClass);
    },
    setAudience(context, audience: string) {
      context.commit(SET_AUDIENCE, audience);
    },
    setProgramTitle(context, title: string) {
      context.commit(SET_PROGRAM_TITLE, title);
    },
    async setPaymentInfo({ commit }, paymentInfo) {
      const formId = "a69ff037-472e-4b81-a35d-1a91b59787d7";
      commit(SCHEDULE_CARD_PAYMENT, paymentInfo);
      await sendToHubspotAndTrackErrors("7092117", formId, paymentInfo);
    },
    setActivePlan(context, plan: Plan) {
      context.commit(SET_ACTIVE_PLAN, plan);
    },
    setStartDate(context, startDate) {
      context.commit(SET_START_DATE, startDate);
    },
    setSource(context, source) {
      context.commit(SET_SOURCE, source);
    },
    async startApplication(context: any, { applicant, hsForm }: any) {
      await sendApplication({
        context,
        applicant,
        hsForm,
      });
    },
    async enroll(context, applicant) {
      await sendApplication({
        context,
        applicant,
        hsForm: "c4c04dcc-7c42-4552-86df-cd3d25294c79",
      });
    },
    applyPromoCode({ commit, state }, promoCodeInput) {
      const newCodes = (promoCodeInput || "")
        .split(",")
        .map((x: string) => x.trim().toUpperCase());
      const allCodes = [...newCodes, ...state.promoCodes];
      const uniqueCodes = [...new Set(allCodes)];
      commit(SET_PROMO_CODES, uniqueCodes);
    },
    payAppFee({ commit }) {
      commit(PAY_APP_FEE);
    },
  },
  getters: {
    getActivePlan: (state): Plan => state.activePlan || "CodeX Academy Program",
    getInternational: (state) => {
      if (state.priceClass) {
        return internationalPlans.filter(
          (x: any) => x.priceClass === state.priceClass
        );
      }

      return internationalPlans;
    },
    getPathways: () => pathways,
    getTechnologies: () =>
      technologies.sort((a: any, b: any) => a.order - b.order),
    getMethods: () => pillars,
    getThreeTestimonials: () => {
      const arr = testimonials;
      const shuffled = shuffle(arr);
      return shuffled.slice(0, 3);
    },
    getApplicant: (state) => state.applicant,
    getStartDate: (state) => state.startDate,
    getCertifications: () => certifications,
    getInternshipPartners: () => internshipPartners,
    getPromoCodes: (state) => state.promoCodes,
    getPromoCodesDisplay: (state) =>
      (state.promoCodes || [])
        .reverse()
        .join(", ")
        .toUpperCase(),
    getApplicationFee: (state) => state.appFeePaid,
    getBootcampFeatures: () => bootcampFeatures,
    getPaymentTypes: () => paymentTypes,
    getPaymentInfo: (state) => state.paymentInfo,
    getCountries: () => countries.filter((x: any) => x.country.length < 25),
    isInternational: (state) => state.priceClass === "international",
    getPriceClass: (state) => state.priceClass,
    getSource: (state) => state.source,
    getProgramTitle: (state) => state.programTitle,
  },
  modules: {},
  plugins: [vuexLocal.plugin],
});
