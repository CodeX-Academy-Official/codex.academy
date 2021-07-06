<template>
  <div class="container mt-5 text-center">
    <h1>BaaS FAQ's</h1>
    <h5>Frequently Asked Questions</h5>
    <div class="pt-3 pb-5">
      <div class="" id="accordion" role="tablist" aria-multiselectable="true">
        <QAndA
          id="faq-customize"
          question="Can I customize the program or include other activities in my boot camp?"
        >
          <p>
            Absolutely, yes! CodeX Academy has a “formula” that works very well
            for helping people learn to code, but you may have elements that
            could enhance that experience and we welcome them! Further, you may
            have activities you want to include that have nothing to do with
            coding, but help prepare your particular students for the future
            ahead of them. That is also very welcome!
          </p>
        </QAndA>

        <QAndA
          id="faq-cohort"
          question="How many cohorts can I host in my bootcamp?"
        >
          <p>
            You can host as many cohorts as you can handle based on your
            availability. You can also stagger start dates so that your
            availability doesn’t take a hit all at once.
          </p>
        </QAndA>

        <QAndA id="faq-when-start" question="When can my students start? ">
          <p>
            We suggest setting a start date for each cohort in your bootcamp to
            build anticipation and to give time for everyone to enroll and get
            set up. The date is completely up to you as long as you give CodeX
            Academy two weeks notice to get everything set up.
          </p>
        </QAndA>

        <QAndA id="faq-boot-camp-cost" question="How much will my student pay?">
          <p>
            You set the price for your boot camp. Just keep in mind your monthly
            costs and mark the price up as you wish.
          </p>
        </QAndA>
        <QAndA
          id="faq-part-time"
          question="Can my students study part-time, or only full-time?"
        >
          <p>
            You will determine the number of weekly study hours your students
            will need to meet your goals or expectations given the time
            allotted. We are happy to share our own opinions based on our
            experience with our own students. It is helpful to many students to
            offer a part-time option since many students work full-time and
            can’t leave their jobs to study.
          </p>
        </QAndA>
        <QAndA
          id="faq-codex-ownership"
          question="What part of my bootcamp does CodeX Academy own?"
        >
          <p>
            It’s very simple. If CodeX Academy faculty or staff creates
            something, CodeX Academy owns it. For example, CodeX Academy
            maintains rights to student records, micro-credentials,
            certifications, modifications or additions to the competency
            library, pathways, process, the core framework, curation of learning
            resources, and CodeX-created learning materials and content, just to
            name a few things.
          </p>
        </QAndA>

        <QAndA
          id="faq-host-ownership"
          question="What part of my bootcamp do I own?"
        >
          <p>
            If you create it, you own it. The most common example of this, in
            the boot camp context, is that of learning materials. If you produce
            your own learning materials, activities or content, then you own the
            rights to it.
          </p> </QAndA
        ><QAndA
          id="faq-student-info-access"
          question="Can I have access to my students’ information?"
        >
          <p>
            Yes, CodeX Academy is happy to share any of your students’ data
            points that we collect during the bootcamp.
          </p> </QAndA
        ><QAndA
          id="faq-enroll-normal-bootcamp"
          question="Could my students just enroll in CodeX Academy without going through my
        bootcamp?"
        >
          <p>
            Technically, yes. But, they would miss out on any of your
            customizations, your involvement or the synergy created by your
            particular cohort of students. If students prefer enrolling without
            those benefits, we will not stand in their way. However, if a
            student bypasses your bootcamp by accident, we can easily bring them
            back to your bootcamp.
          </p>
        </QAndA>

        <QAndA
          id="faq-getting-started"
          question="What do I need to do to get started with my own bootcamp?"
        >
          <p>
            Send us your logo files (high resolution, transparent background,
            PNG) and your bootcamp name. We will create a co-branded landing
            page for your bootcamp and you can begin marketing.
          </p>
        </QAndA>
      </div>
    </div>
  </div>
</template>

<script>
import QAndA from "@/components/QAndA";
import Unsplash from "@/components/Unsplash";

export default {
  components: {
    QAndA,
    Unsplash,
  },
};
</script>

<style></style>
