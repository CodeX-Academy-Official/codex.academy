import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";
import { shuffle } from "./utils";
import { sendToHubspot } from "./hubspot";
import { testimonials } from "./testimonials";
import { methods } from "./pillars";
import { technologies } from "./technologies";
import { programs } from "./programs";
import { programOptions } from "./programOptions";
import { pathways } from "./pathways";

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
});

Vue.use(Vuex);

const SELECT_PLAN = "SELECT_PLAN";
const ENROLL = "ENROLL";

export default new Vuex.Store({
  state: {
    testMode: false,
    plans: programs,
    planOptions: programOptions,
    selectedPlan: undefined,
    applicant: undefined,
    technologies,
    methods,
    testimonials,
    pathways
  },
  mutations: {
    [SELECT_PLAN](state: any, planId) {
      state.selectedPlan = planId;
    },
    [ENROLL](state: any, applicant) {
      state.applicant = applicant;
    }
  },
  actions: {
    selectPlan(context, planId) {
      context.commit(SELECT_PLAN, planId);
    },
    async enroll(context, applicant) {
      const applicantWithId = { ...applicant, learnerId: Date.now() };
      context.commit(ENROLL, applicantWithId);
      await sendToHubspot(
        "7092117",
        "c4c04dcc-7c42-4552-86df-cd3d25294c79",
        applicantWithId
      );
    }
  },
  getters: {
    getSelectedPlan: state => state.selectedPlan,
    getBootcamp6: state => state.plans.find((x: any) => x.id == "bootcamp6"),
    getCommunityPlan: state =>
      state.plans.find((x: any) => x.id == "community"),
    getPlan: state => (planId: string) =>
      state.plans.find((x: any) => x.id === planId),
    getPlans: state => state.plans,
    getPlanOptions: state => state.planOptions,
    getPathways: state => state.pathways,
    getTechnologies: state =>
      state.technologies.sort((a: any, b: any) => a.order - b.order),
    getMethods: state => state.methods,
    getThreeTestimonials: state => {
      const arr = state.testimonials;
      const shuffled = shuffle(arr);
      return shuffled.slice(0, 3);
    },
    getApplicant: state => state.applicant
  },
  modules: {},
  plugins: [vuexLocal.plugin]
});
