
package pac8sub;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class page1 {
	@FindBy(how=How.ID,using ="userName")
	static public WebElement username;
	@FindBy(how=How.ID,using ="password")
	static public WebElement password;
	@FindBy(how=How.NAME,using ="Login")
	static public WebElement login;
	 

}
