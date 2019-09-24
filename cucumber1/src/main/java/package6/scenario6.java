package package6;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions (
		plugin = {"html:src/main/java/package6/output/cucumberhtml",
		          "json:src/main/java/package6/output/packag.xml",
		          "junit:src/main/java/package6/output/packagresults.json"}
		)


public class scenario6 {

}
