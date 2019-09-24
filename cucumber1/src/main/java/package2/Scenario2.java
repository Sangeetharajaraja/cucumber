package package2;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;

public class Scenario2 {
	@Given("I enter 25 in the calculator")
	public void a()
	{
		System.out.println("I enter 25 in the calculator");
	}
	@And("I enter add")
	public void b()
	{
		System.out.println("I enter add");
	}
	@And("I enter 30 in the calculator")
	public void c()
	{
		System.out.println("I enter 30 in the calculator");
	}
	@And("I enter equal")
	public void d()
	{
		System.out.println("I enter equal");
	}
	@Then("display 55")
	public void e()
	{
		System.out.println("display 55");
	}
	@Given("I enter 50 in the calculator")
	public void f()
	{
		System.out.println("I enter 50 in the calculator");
	}
	@And("I enter subtract")
	public void g()
	{
		System.out.println("I enter subtract");
    }
	@And("I enter 10 in the calculator")
	public void h()
	{
		System.out.println("I enter 10 in the calculator");
	}
	@Then("display 40")
	public void i()
	{
		System.out.println("display 40");
	}

}
