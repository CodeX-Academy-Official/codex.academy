import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";
import { shuffle } from "./utils";
import { sendToHubspot } from "./hubspot";
import { testimonials } from "./testimonials";
import { pillars } from "./pillars";
import { technologies } from "./technologies";
import { bootcampFeatures } from "./programs";
import { pathways } from "./pathways";
import { certifications } from "./certifications";
import { internshipPartners } from "./internshipPartners";
import { paymentTypes } from "./paymentTypes";
import { countries } from "./countries";

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});

Vue.use(Vuex);

const SELECT_PLAN = "SELECT_PLAN";
const ENROLL = "ENROLL";
const SET_START_DATE = "SET_START_DATE";
const APPLY_PROMO_CODE = "APPLY_PROMO_CODE";
const PAY_APP_FEE = "PAY_APP_FEE";
const SET_CERTIFICATION = "SET_CERTIFICATION";
const SET_PROGRAM = "SET_PROGRAM";
const SCHEDULE_CARD_PAYMENT = "SCHEDULE_CARD_PAYMENT";

export default new Vuex.Store({
  state: {
    testMode: false,
    startDate: false,
    selectedPlan: undefined,
    applicant: undefined,
    promoCodes: [],
    certification: undefined,
    program: undefined,
    appFeePaid: undefined,
    paymentInfo: undefined,
  },
  mutations: {
    [SCHEDULE_CARD_PAYMENT](state: any, paymentInfo) {
      state.paymentInfo = paymentInfo;
    },
    [SET_PROGRAM](state: any, program) {
      state.program = program;
    },
    [SET_CERTIFICATION](state: any, cert) {
      state.certification = cert;
    },
    [SELECT_PLAN](state: any, planId) {
      state.selectedPlan = planId;
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
    setProgram(context, program) {
      context.commit(SET_PROGRAM, program);
    },
    setCertification(context, cert) {
      context.commit(SET_CERTIFICATION, cert);
    },
    setStartDate(context, startDate) {
      context.commit(SET_START_DATE, startDate);
    },
    selectPlan(context, planId) {
      context.commit(SELECT_PLAN, planId);
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
    getCertification: (state) => state.certification,
    getProgram: (state) => state.program,
    getSelectedPlan: (state) => state.selectedPlan,
    getBootcamp6: (state) => state.plans.find((x: any) => x.id == "bootcamp6"),
    getCommunityPlan: (state) =>
      state.plans.find((x: any) => x.id == "community"),
    getPlan: (state) => (planId: string) =>
      state.plans.find((x: any) => x.id === planId),
    getPlans: (state) => state.plans,
    getBootcamps: (state) => state.plans.filter((x: any) => x.isBootcamp),
    getSelfPaced: (state) =>
      state.plans.filter((x: any) => x.isMentoring && !x.isBootcamp),
    getPlanOptions: (state) => state.planOptions,
    getPathways: (state) => pathways,
    getTechnologies: (state) =>
      technologies.sort((a: any, b: any) => a.order - b.order),
    getMethods: (state) => pillars,
    getThreeTestimonials: (state) => {
      const arr = testimonials;
      const shuffled = shuffle(arr);
      return shuffled.slice(0, 3);
    },
    getApplicant: (state) => state.applicant,
    getStartDate: (state) => state.startDate,
    getCertifications: (state) => certifications,
    getInternshipPartners: (state) => internshipPartners,
    getPromoCodes: (state) => state.promoCodes,
    getPromoCodesDisplay: (state) =>
      (state.promoCodes || [])
        .reverse()
        .join(", ")
        .toLowerCase(),
    getApplicationFee: (state) => state.appFeePaid,
    getBootcampFeatures: (state) => bootcampFeatures,
    getPaymentTypes: (state) => paymentTypes,
    getPaymentInfo: (state) => state.paymentInfo,
    getCountries: () => countries.filter((x: any) => x.country.length < 25),
  },
  modules: {},
  plugins: [vuexLocal.plugin],
});
