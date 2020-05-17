import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";
import { shuffle } from "./utils";
import { sendToHubspot } from "./hubspot";
import { testimonials } from "./testimonials";
import { pillars } from "./pillars";
import { technologies } from "./technologies";
import { selfPacedPlans, bootcampFeatures } from "./plans";
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

const SELECT_PLAN = "SELECT_PLAN";
const ENROLL = "ENROLL";
const SET_START_DATE = "SET_START_DATE";
const APPLY_PROMO_CODE = "APPLY_PROMO_CODE";
const PAY_APP_FEE = "PAY_APP_FEE";
const SET_ACTIVE_PLAN = "SET_ACTIVE_PLAN";
const SCHEDULE_CARD_PAYMENT = "SCHEDULE_CARD_PAYMENT";

export default new Vuex.Store({
  state: {
    testMode: false,
    startDate: false,
    applicant: undefined,
    promoCodes: [],
    appFeePaid: undefined,
    paymentInfo: undefined,
  },
  mutations: {
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
    [APPLY_PROMO_CODE](state: any, promoCode) {
      state.promoCodes.push(promoCode);
    },
    [PAY_APP_FEE](state: any) {
      state.appFeePaid = new Date();
    },
  },
  actions: {
    async setPaymentInfo({ commit }, paymentInfo) {
      const formId = "a69ff037-472e-4b81-a35d-1a91b59787d7";
      commit(SCHEDULE_CARD_PAYMENT, paymentInfo);
      await sendToHubspot("7092117", formId, paymentInfo);
    },
    setActivePlan(context, plan: Plan) {
      context.commit(SET_ACTIVE_PLAN, plan);
    },
    setStartDate(context, startDate) {
      context.commit(SET_START_DATE, startDate);
    },
    async startApplication(context: any, { applicant, hsForm }: any) {
      const formId = hsForm || "56d6a407-24b7-4a6b-be49-45d4dbc6eea5";
      const applicantWithId = { ...applicant, learnerId: Date.now() };
      context.commit(ENROLL, applicantWithId);
      await sendToHubspot("7092117", formId, applicantWithId);
    },
    async enroll(context, applicant) {
      const applicantWithId = { ...applicant, learnerId: Date.now() };
      context.commit(ENROLL, applicantWithId);
      await sendToHubspot(
        "7092117",
        "c4c04dcc-7c42-4552-86df-cd3d25294c79",
        applicantWithId
      );
    },
    applyPromoCode({ commit, state }, promoCode) {
      const hasPromoCodeCode = state.promoCodes.indexOf(promoCode) > -1;
      if (!hasPromoCodeCode) {
        commit(APPLY_PROMO_CODE, promoCode);
      }
    },
    payAppFee({ commit }) {
      commit(PAY_APP_FEE);
    },
  },
  getters: {
    getActivePlan: (state): Plan => state.activePlan,
    getSelfPaced: () => selfPacedPlans,
    getMonthlyPlans: () => selfPacedPlans,
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
        .toLowerCase(),
    getApplicationFee: (state) => state.appFeePaid,
    getBootcampFeatures: () => bootcampFeatures,
    getPaymentTypes: () => paymentTypes,
    getPaymentInfo: (state) => state.paymentInfo,
    getCountries: () => countries.filter((x: any) => x.country.length < 25),
  },
  modules: {},
  plugins: [vuexLocal.plugin],
});
