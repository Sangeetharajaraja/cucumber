package package5;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;

public class scenario_5 {
	@Given("I am a {word} tester")
	public void a(String abc) {
		System.out.println("I am a "+abc+" tester");
	}
	@And("I go to it")
	public void b() {
		System.out.println("I go to it");
	}
	@And("I {word} it")
	public void c(String bcd) {
		System.out.println("I "+bcd+" it");
	}

}
