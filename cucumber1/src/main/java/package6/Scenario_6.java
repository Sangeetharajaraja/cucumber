package package6;
import java.util.*;

import gherkin.ast.DataTable;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class Scenario_6 {
@Given("There are {word} fruits")
public void am(String a,DataTable t) {
	List<Map<String,String>> data= t.asMaps(String.class,String.class);
	System.out.println("There are fruits "+a+" "+data.get(0).get("type"));
	System.out.println("There are fruits "+a+" "+data.get(1).get("type"));
	System.out.println("There are fruits "+a+" "+data.get(2).get("type"));

}
@When ("I eat {word} fruits")
public void b(String bb)
{
	System.out.println("I eat "+bb+" fruits");

}
@Then ("I have {word} fruits")
public void c(String cc) {
	System.out.println("I have "+cc+" fruits");
}
}
