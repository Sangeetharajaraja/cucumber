package pac8;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.PageFactory;

import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import pac8sub.page1;

public class Scenario8 {
	WebDriver driver;
	@Before
	public void x() {
		System.setProperty("webdriver.chrome.driver","C:\\Users\\training_c2a.04.30\\Desktop\\Drivers\\ChromeDriver.exe");
		driver=new ChromeDriver();
		PageFactory.initElements(driver,page1.class);
	}
	@After
	public void y() {
		driver.close();
	}
	@Given("I enter the url {string}")
	public void a(String string) {
		driver.get(string);
	}

@And("I Enter {string}")
public void c(String s) {
	page1.username.sendKeys(s);
}
@And("I enter {string}")
public void d(String f) {
	page1.password.sendKeys(f);
}
@Then("I click login")
public void k() {
	page1.login.click();
}
}