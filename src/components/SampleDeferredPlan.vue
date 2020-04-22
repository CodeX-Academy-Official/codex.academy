<template>
  <div>
    <p>
      Sample Deferred Payment Plan for representative purposes. Actual terms may vary based on a
      number of factors.
    </p>
    <div class="row loan-table">
      <div class="col-4 col-md-2 data" v-for="d in sampleData" :key="d.title">
        <div class="header align-middle">
          <span class="align-middle">
            {{ d.title }}
            <sup>{{ d.footnote }}</sup>
          </span>
        </div>
        <div class="content">
          <span class="align-middle">{{ d.content }}</span>
        </div>
      </div>
    </div>
    <div class="mt-4">
      <div class="text-muted small text-left" v-for="d in sampleData" :key="d.title">
        <sup>{{ d.footnote }}</sup>
        {{ d.footnoteText }}
      </div>
    </div>
    <!-- <div class="mt-3 text-muted small text-left">
      Loan approval subject to full underwriting. Loans are originated by Climb
      Investco, LLC (Registered as Climb Credit Investco, LLC in Florida). Code
      X Academy does not endorse loans originated by Climb Investco, LLC and
      Climb Investco, LLC is not affiliated with Code X Academy. California
      Finance Lender #60DBO-44527. NMLS Consumer Access (NMLS# 1240013).
    </div>-->
  </div>
</template>

<script>
export default {
  data: () => ({
    sampleData: [
      {
        title: "Program Cost",
        content: "$9,000",
        //footnote: "1",
        footnoteText:
          "Finance up to tuition. The minimum loan amount is $3,000 or max loan if below $3,000."
      },
      {
        title: "Term (months)",
        content: "12",
        //footnote: "2",
        footnoteText:
          "Sample 42-month term includes 42 months of principal and interest payments. Terms vary by program."
      },
      {
        title: "Interest Rate",
        content: "7.49%",
        footnote: "3",
        footnoteText:
          "Interest rates range from 6.99%-13.99%. Actual interest rates may vary based on a number of factors."
      },
      {
        title: "APR",
        content: "9.8%",
        footnote: "4",
        footnoteText:
          "APRs on loans range from 9.87%-17.01%. An annual percentage rate (APR) in the annual rate charged for borrowing and is expressed as a percentage that represents the actual yearly cost of funds over the term of a loan. The APR includes a 5% origination fee."
      },
      {
        title: "Interest-Only Pmt",
        content: "$59",
        footnote: ""
      },
      {
        title: "Principal & Interest Pmt",
        content: "$294",
        footnote: ""
      }
    ]
  })
};
</script>

<style lang="scss">
@import "@/variables";
.loan-table {
  .data {
    color: white;
    padding: 0px 2px;
    margin-bottom: 4px;
  }
  .header {
    background-color: $periwinkle;
    padding: 10px;
    margin-bottom: 4px;
    height: 70px;
  }
  .content {
    background-color: $lilac;
    padding: 10px;
    height: 70px;
  }
}
</style>
