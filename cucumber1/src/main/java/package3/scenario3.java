package package3;

import io.cucumber.java.en.Given;

public class scenario3 {
	@Given("I enter {word} in the system")
	public void ab(String abc) {
		System.out.println("I enter "+abc+" in the system");
	}

}
