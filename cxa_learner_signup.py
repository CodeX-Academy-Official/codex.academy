import time
from selenium import webdriver
from selenium.webdriver.common.keys import Keys

def sleep(time_S):
  time.sleep(time_S)

#test student

LearnerName = "ChrisTest MoreTest"
LearnerEmail = "christian+selTest@codex.Academy"
promoVal = "TestPromo"
phone = "615-123-4567"
StAddr = "Test St"
Apart = "1"
City = "Smyrna"
state = "TN"
postalCode = "37167"
Country = "United States"
dob = "10/11/2002"
Gender = "male"



# set driver path
driver = webdriver.Chrome(executable_path="F:\\private\\CXA_test\chromedriver.exe")
driver.set_page_load_timeout(5)
# print(type(driver))

# Set general
driver.get("http://www.codex.academy/#/")

###########################################################
# Simple test
###########################################################
myPageTitle = driver.title
print(myPageTitle)
assert "CodeX Academy" in myPageTitle

###########################################################
# Step : Fill out Short form
###########################################################
NameUrl   = '//*[@id="name"]' #'//*[@id="app"]/div/div[2]/div/div[2]/div/div/div/form/div[1]/input'
EmailUrl  = '//*[@id="email"]' #'//*[@id="app"]/div/div[2]/div/div[2]/div/div/div/form/div[2]/input'
submitUrl = '//*[@id="submit"]'  #'//*[@id="app"]/div/div[2]/div/div[2]/div/div/div/form/div[4]/button'

driver.find_element_by_xpath(NameUrl).send_keys(LearnerName)
driver.find_element_by_xpath(EmailUrl).send_keys(LearnerEmail)
driver.find_element_by_xpath(submitUrl).click()
sleep(3)

###########################################################
# Select Program
###########################################################
programUrl = '//*[@id="prgmSelect"]/strong' #'//*[@id="app"]/div/div[2]/div[3]/div[2]/div[2]/div/ul/li[15]/a'
driver.find_element_by_xpath(programUrl).click()
sleep(3)

###########################################################
# Confirm Program
###########################################################
promoUrl          = '//*[@id="promoCode"]' #//*[@id="app"]/div/div[2]/div[2]/div/div[2]/form/div/table/tr[7]/td/input'
applyPromoUrl     = '//*[@id="promoSubmit"]' #'//*[@id="app"]/div/div[2]/div[2]/div/div[2]/form/div/table/tr[7]/td/button'
confirmProgramUrl = '//*[@id="ContinueApplication"]/strong' #'//*[@id="app"]/div/div[2]/div[2]/div/div[2]/form/p/button/strong'


driver.find_element_by_xpath(promoUrl).send_keys(promoVal)
driver.find_element_by_xpath(applyPromoUrl).click()
driver.find_element_by_xpath(confirmProgramUrl).click()
sleep(3)

###########################################################
# Step : Fill out Long Form
###########################################################
phoneUrl    = '//*[@id="phone"]'
StAddrUrl   = '//*[@id="inputAddress"]'
apartUrl    = '//*[@id="inputAddress2"]'
cityUrl     = '//*[@id="inputCity"]'
stateUrl    = '//*[@id="inputState"]'  #'//*[@id="app"]/div/div[2]/div[2]/div/div[2]/div/form/div[4]/div[2]/input'
zipUrl      = '//*[@id="inputZip"]'
countryUrl  = '//*[@id="inputCountry"]'  #'//*[@id="app"]/div/div[2]/div[2]/div/div[2]/div/form/div[4]/div[4]/select/option[225]'
DOBUrl      = '//*[@id="inputDob"]'
genderUrl   = '//*[@id="gender"]/option[1]'
submitUrlLF = '//*[@id="contApplication"]/strong' #'//*[@id="app"]/div/div[2]/div[2]/div/div[2]/div/form/div[6]/p/button/strong'

driver.find_element_by_xpath(phoneUrl).send_keys(phone)
driver.find_element_by_xpath(StAddrUrl).send_keys(StAddr)
driver.find_element_by_xpath(apartUrl).send_keys(Apart)
driver.find_element_by_xpath(cityUrl).send_keys(City)
driver.find_element_by_xpath(stateUrl).send_keys(state)
driver.find_element_by_xpath(zipUrl).send_keys(postalCode)
driver.find_element_by_xpath(countryUrl).click()
driver.find_element_by_xpath(DOBUrl).send_keys(dob)
driver.find_element_by_xpath(genderUrl).click()

driver.find_element_by_xpath(submitUrlLF).click()
sleep(3)


###########################################################
# Step : Fill Out Payment information
###########################################################
# Selecting ISA
driver.get("https://www.codex.academy/#/enroll/payment")
selectPaymentUrl = '//*[@id="app"]/div/div[2]/div[2]/div/div[2]/div/div/div[2]/div[1]/div/div[3]/button/strong'
driver.find_element_by_xpath(selectPaymentUrl).click()
sleep(3)


# ###########################################################
# # Step : Fill Out learner form
# ###########################################################
driver = webdriver.Chrome(executable_path="F:\\private\\CXA_test\chromedriver.exe")
driver.get("https://share.hsforms.com/1YTZDfY5TT6-Me7FQTGdBhA480b9")


EmailUrl      = '//*[@id="email-input"]'
callByNameUrl = '//*[@id="called_by_name-input"]'
linkedInUrl   = '//*[@id="linkedin_page-input"]'
progExpUrl    = '//*[@id="programming_experience0-6136437d-8e53-4faf-8c7b-b1504c674184-label"]/span'

driver.find_element_by_xpath(EmailUrl).send_keys(LearnerEmail)
driver.find_element_by_xpath(callByNameUrl).send_keys(LearnerName)
driver.find_element_by_xpath(linkedInUrl).send_keys("none")
driver.find_element_by_xpath(progExpUrl).click()
driver.find_element_by_class_name('hs-form__actions__submit').click()

sleep(3)
driver.quit()

###########################################################
# Step : Fill Out Mentor Match form
###########################################################
driver = webdriver.Chrome(executable_path="F:\\private\\CXA_test\chromedriver.exe")
driver.get("https://share.hsforms.com/1UaE6Ah9ZST65GVTM56H0DQ480b9")
sleep(3)

EmailUrl    = '//*[@id="email-input"]'
timeZoneUrl = '//*[@id="your_time_zone-input"]'

WeekDaysUrl = '//*[@id="study_days4-51a13a02-1f59-493e-b919-54cce7a1f40d-input"]'
WeekHourUrl = '//*[@id="study_hours3-51a13a02-1f59-493e-b919-54cce7a1f40d-input"]'
personUrl   = '//*[@id="humor4-51a13a02-1f59-493e-b919-54cce7a1f40d-input"]'
motivateUrl = '//*[@id="motivation1-51a13a02-1f59-493e-b919-54cce7a1f40d-input"]'

driver.find_element_by_xpath(EmailUrl).send_keys(LearnerEmail)
driver.find_element_by_xpath(timeZoneUrl).send_keys("CST")

driver.find_element_by_xpath(WeekDaysUrl).click()
driver.find_element_by_xpath(WeekHourUrl).click()
driver.find_element_by_xpath(personUrl).click()
driver.find_element_by_xpath(motivateUrl).click()

driver.find_element_by_class_name('hs-form__actions__submit').click()

sleep(3)

driver.quit()


