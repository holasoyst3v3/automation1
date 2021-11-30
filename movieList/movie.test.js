const { Builder, Capabilities, By } = require('selenium-webdriver');
require('chromedriver');

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

beforeAll(async () => {
    await driver.get('http://localhost:5501/movieList/index.html')
})

afterAll(async () => {
    await driver.quit();
})

test('add a movie', async () => {
    await driver.sleep(3000)

    var inputField = await driver.findElement(By.xpath('//input'))
    inputField.sendKeys('Tony Stank and the Revengers');

    var button = await driver.findElement(By.xpath('//button'))
    await button.click()
    
    await driver.sleep(3000)

    var inputField = await driver.findElement(By.xpath('//input'))
    inputField.sendKeys('Revengers: Revenge of the Revengers')   
    
    var button = await driver.findElement(By.xpath('//button'))
    await button.click()

    await driver.sleep(3000)

    var clickMovie = await driver.findElement(By.xpath('//span'))
    await clickMovie.click()

    await driver.sleep(3000)

    var unclickMovie = await driver.findElement(By.xpath('//span[@class = "checked"]'))
    await unclickMovie.click()

    await driver.sleep(3000)

    var deleteButton = await driver.findElement(By.xpath('//button[@id]'))
    await deleteButton.click()

    await driver.sleep(3000)

})