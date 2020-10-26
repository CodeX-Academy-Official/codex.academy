import { paymentTypes } from "./paymentTypes"
import { Plan } from '@/types/Plan';
import { Applicant } from '@/types/Applicant';

describe("Payment Types", () => {
    const program: Plan = {
        id: "test",
        isMonthly: true,
        name: "test",
        description: "test 1 2 3 ",
        startDate: new Date(),
        studyHours: 0, 
        mentorSessions: 5, 
        totalStudyHours: 500, 
        price: 1500,
        months: 6, isFixed: true, appFee: true
    };
    const programNames = ["Front-End Developer", "Full-Stack Developer", "Full-Stack Engineer"];
    const studyHours = [10, 20, 30, 40];

    describe("when finding a payment plan", () => {

        describe("when there is no applicant", () => {
            const fullTime = 40;
            const frontEndDevProgram = { ...program, name, studyHours: fullTime };
            // @ts-ignore: Unreachable code error
            const result = paymentTypes.filter(x => x.worksWith(frontEndDevProgram, null));

            it("should NOT include ISA", () => {
                expect(result.map(x=> x.type)).not.toContain("leif-pathrise")
            })

            it("should include CC", () => {
                expect(result.map(x=> x.type)).toContain("stripeCreditCard")
            })
        })

        
        describe("when student is a Pathrise USA student", () => {
            const applicant: Applicant = {
                country: "USA",
                source: "pathrise"
            };
            describe.each(programNames)("when choosing full-time %p", (name) => {
                const fullTime = 40;
                const frontEndDevProgram = { ...program, name, studyHours: fullTime };
                const result = paymentTypes.filter(x => x.worksWith(frontEndDevProgram, applicant));

                it("should include deferred ISA", () => {
                    expect(result.map(x=> x.type)).toContain("leif-pathrise")
                })

                it("should NOT include standard ISA", () => {
                    expect(result.map(x=> x.type)).not.toContain("leif")
                })
    
                it("should include CC", () => {
                    expect(result.map(x=> x.type)).toContain("stripeCreditCard")
                })

                it("should include Loan", () => {
                    expect(result.map(x=> x.type)).toContain("climb")
                })
                
                it("should NOT include codex installment plan", () => {
                    expect(result.map(x=> x.type)).not.toContain("codex-installments")
                })
            })
            describe.each(programNames)("when choosing part-time %p", (name) => {
                const partTime = 20;
                const frontEndDevProgram = { ...program, name, studyHours: partTime };
                const result = paymentTypes.filter(x => x.worksWith(frontEndDevProgram, applicant));

                it("should NOT include ISA", () => {
                    expect(result.map(x=> x.type)).not.toContain("leif-pathrise")
                })
    
                it("should include CC", () => {
                    expect(result.map(x=> x.type)).toContain("stripeCreditCard")
                })
            })
        })

        describe("when student is a Pathrise student outside the USA", () => {
            const applicant: Applicant = {
                country: "other",
                source: "pathrise"
            };
            describe.each(programNames)("when choosing %p", (programName) => {
                describe.each(studyHours)("when selecting %p study hours", (hours) => {

                    const frontEndDevProgram = { ...program, name: programName, studyHours: hours };
                    const result = paymentTypes.filter(x => x.worksWith(frontEndDevProgram, applicant));

                    it("should NOT include deferred ISA", () => {
                        expect(result.map(x=> x.type)).not.toContain("leif-pathrise")
                    })
    
                    it("should NOT include standard ISA", () => {
                        expect(result.map(x=> x.type)).not.toContain("leif")
                    })
        
                    it("should include CC", () => {
                        expect(result.map(x=> x.type)).toContain("stripeCreditCard")
                    })
    
                    it("should NOT include Loan", () => {
                        expect(result.map(x=> x.type)).not.toContain("climb")
                    })
                    
                    it("should NOT include codex installment plan", () => {
                        expect(result.map(x=> x.type)).not.toContain("codex-installments")
                    })
                })
            })
        })

        describe("when student is a USA student", () => {
            const applicant: Applicant = {
                country: "USA",
                source: "none"
            };

            describe.each(programNames)("when choosing %p", (programName) => {
                describe.each(studyHours)("when selecting %p study hours", (hours) => {

                    const frontEndDevProgram = { ...program, name: programName, studyHours: hours };
                    const result = paymentTypes.filter(x => x.worksWith(frontEndDevProgram, applicant));

                    it("should include ISA", () => {
                        const isa = result.find(x => x.type === "leif");
                        expect(isa).toBeDefined();
                    })
                })
            })
        })

        describe("when student is outside the USA", () => {
            const applicant: Applicant = {
                country: "Other",
                source: "none"
            };

            describe.each(programNames)("when choosing %p", (programName) => {
                describe.each(studyHours)("when selecting %p study hours", (hours) => {

                    const theProgram = { ...program, name: programName, studyHours: hours };
                    const result = paymentTypes.filter(x => x.worksWith(theProgram, applicant));

                    it("should NOT include ISA", () => {
                        const isa = result.find(x => x.type === "leif");
                        expect(isa).toBeUndefined();
                    })
                })
            })
        })
    })
})