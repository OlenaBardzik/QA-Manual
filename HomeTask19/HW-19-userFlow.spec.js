// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('User Flow', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('FLOW: register user, check name, add car, add fuel expenses, remove account', async function() {
    await driver.get("https://qauto2.forstudy.space/")
    await driver.manage().window().setRect({ width: 1289, height: 996 })
    await driver.findElement(By.css(".hero-descriptor_btn")).click()
    await driver.findElement(By.id("signupName")).click()
    await driver.findElement(By.id("signupName")).sendKeys("Firstname")
    await driver.findElement(By.id("signupLastName")).click()
    await driver.findElement(By.id("signupLastName")).sendKeys("Lastname")
    await driver.findElement(By.id("signupEmail")).click()
    await driver.findElement(By.id("signupEmail")).sendKeys("testtest@email.com")
    await driver.findElement(By.id("signupPassword")).click()
    await driver.findElement(By.id("signupPassword")).sendKeys("Aa123456")
    await driver.findElement(By.id("signupRepeatPassword")).click()
    await driver.findElement(By.id("signupRepeatPassword")).sendKeys("Aa123456")
    await driver.findElement(By.css(".btn-primary:nth-child(1)")).click()
    await driver.findElement(By.linkText("Profile")).click()
    {
      const elements = await driver.findElements(By.css(".profile_name"))
      assert(elements.length)
    }
    assert(await driver.findElement(By.css(".profile_name")).getText() == "Firstname Lastname")
    await driver.findElement(By.css(".sidebar > .btn:nth-child(1)")).click()
    await driver.findElement(By.css(".btn-primary")).click()
    await driver.findElement(By.id("addCarMileage")).click()
    await driver.findElement(By.id("addCarMileage")).sendKeys("1000")
    await driver.findElement(By.css(".modal-footer > .btn-primary")).click()
    await driver.findElement(By.css(".car_add-expense")).click()
    {
      const element = await driver.findElement(By.css(".car_add-expense"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    {
      const element = await driver.findElement(By.CSS_SELECTOR, "body")
      await driver.actions({ bridge: true }).moveToElement(element, 0, 0).perform()
    }
    {
      const element = await driver.findElement(By.id("addExpenseMileage"))
      await driver.actions({ bridge: true }).moveToElement(element).clickAndHold().perform()
    }
    {
      const element = await driver.findElement(By.id("addExpenseMileage"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    {
      const element = await driver.findElement(By.id("addExpenseMileage"))
      await driver.actions({ bridge: true }).moveToElement(element).release().perform()
    }
    await driver.findElement(By.id("addExpenseMileage")).click()
    await driver.findElement(By.id("addExpenseMileage")).sendKeys("2000")
    await driver.findElement(By.id("addExpenseLiters")).click()
    await driver.findElement(By.id("addExpenseLiters")).sendKeys("100")
    await driver.findElement(By.id("addExpenseTotalCost")).click()
    await driver.findElement(By.id("addExpenseTotalCost")).sendKeys("100")
    await driver.findElement(By.css(".modal-footer > .btn-primary")).click()
    await driver.findElement(By.linkText("Settings")).click()
    await driver.findElement(By.css(".btn-danger-bg")).click()
    await driver.findElement(By.css(".btn-danger")).click()
  })
})
