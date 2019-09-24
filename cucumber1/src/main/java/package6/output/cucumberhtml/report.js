$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("classpath:package6/scenario6.feature");
formatter.feature({
  "name": "eating fruits",
  "description": "this explain about fruits",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "eating",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "There are \"\u003cstart\u003e\" fruits",
  "keyword": "Given ",
  "rows": [
    {
      "cells": [
        "type",
        "with"
      ]
    },
    {
      "cells": [
        "apple",
        "john"
      ]
    },
    {
      "cells": [
        "mango",
        "joseph"
      ]
    }
  ]
});
formatter.step({
  "name": "I eat \"\u003ceat\u003e\" fruits",
  "keyword": "When "
});
formatter.step({
  "name": "I have \"\u003cleft\u003e\" fruits",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "start",
        "eat",
        "left"
      ]
    },
    {
      "cells": [
        "2",
        "5",
        "6"
      ]
    },
    {
      "cells": [
        "7",
        "8",
        "8"
      ]
    }
  ]
});
formatter.scenario({
  "name": "eating",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "There are \"2\" fruits",
  "rows": [
    {
      "cells": [
        "type",
        "with"
      ]
    },
    {
      "cells": [
        "apple",
        "john"
      ]
    },
    {
      "cells": [
        "mango",
        "joseph"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "Scenario_6.am(String,DataTable)"
});
formatter.result({
  "error_message": "cucumber.runtime.CucumberException: Could not convert arguments for step [There are {word} fruits] defined at \u0027package6.Scenario_6.am(String,DataTable) in file:/C:/Users/training_c2a.04.30/sangitha/cucumber1/target/classes/\u0027.\nIt appears you did not register a data table type. The details are in the stacktrace below.\r\n\tat cucumber.runner.PickleStepDefinitionMatch.registerTypeInConfiguration(PickleStepDefinitionMatch.java:59)\r\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:44)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:46)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:50)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:144)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:65)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:174)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:538)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:760)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:460)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:206)\r\nCaused by: io.cucumber.datatable.UndefinedDataTableTypeException: Can\u0027t convert DataTable to gherkin.ast.DataTable.\nPlease register a DataTableType with a TableTransformer, TableEntryTransformer or TableRowTransformer for gherkin.ast.DataTable.\r\n\tat io.cucumber.datatable.UndefinedDataTableTypeException.singletonNoConverterDefined(UndefinedDataTableTypeException.java:15)\r\n\tat io.cucumber.datatable.DataTableTypeRegistryTableConverter.toSingleton(DataTableTypeRegistryTableConverter.java:106)\r\n\tat io.cucumber.datatable.DataTableTypeRegistryTableConverter.convert(DataTableTypeRegistryTableConverter.java:75)\r\n\tat io.cucumber.datatable.DataTable.convert(DataTable.java:362)\r\n\tat io.cucumber.stepexpression.StepExpressionFactory$3.transform(StepExpressionFactory.java:73)\r\n\tat io.cucumber.stepexpression.DataTableArgument.getValue(DataTableArgument.java:19)\r\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:41)\r\n\t... 29 more\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I eat \"5\" fruits",
  "keyword": "When "
});
formatter.match({
  "location": "Scenario_6.b(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I have \"6\" fruits",
  "keyword": "Then "
});
formatter.match({
  "location": "Scenario_6.c(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "eating",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "There are \"7\" fruits",
  "rows": [
    {
      "cells": [
        "type",
        "with"
      ]
    },
    {
      "cells": [
        "apple",
        "john"
      ]
    },
    {
      "cells": [
        "mango",
        "joseph"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "Scenario_6.am(String,DataTable)"
});
formatter.result({
  "error_message": "cucumber.runtime.CucumberException: Could not convert arguments for step [There are {word} fruits] defined at \u0027package6.Scenario_6.am(String,DataTable) in file:/C:/Users/training_c2a.04.30/sangitha/cucumber1/target/classes/\u0027.\nIt appears you did not register a data table type. The details are in the stacktrace below.\r\n\tat cucumber.runner.PickleStepDefinitionMatch.registerTypeInConfiguration(PickleStepDefinitionMatch.java:59)\r\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:44)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:46)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:50)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:144)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:65)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:174)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:538)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:760)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:460)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:206)\r\nCaused by: io.cucumber.datatable.UndefinedDataTableTypeException: Can\u0027t convert DataTable to gherkin.ast.DataTable.\nPlease register a DataTableType with a TableTransformer, TableEntryTransformer or TableRowTransformer for gherkin.ast.DataTable.\r\n\tat io.cucumber.datatable.UndefinedDataTableTypeException.singletonNoConverterDefined(UndefinedDataTableTypeException.java:15)\r\n\tat io.cucumber.datatable.DataTableTypeRegistryTableConverter.toSingleton(DataTableTypeRegistryTableConverter.java:106)\r\n\tat io.cucumber.datatable.DataTableTypeRegistryTableConverter.convert(DataTableTypeRegistryTableConverter.java:75)\r\n\tat io.cucumber.datatable.DataTable.convert(DataTable.java:362)\r\n\tat io.cucumber.stepexpression.StepExpressionFactory$3.transform(StepExpressionFactory.java:73)\r\n\tat io.cucumber.stepexpression.DataTableArgument.getValue(DataTableArgument.java:19)\r\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:41)\r\n\t... 29 more\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I eat \"8\" fruits",
  "keyword": "When "
});
formatter.match({
  "location": "Scenario_6.b(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I have \"8\" fruits",
  "keyword": "Then "
});
formatter.match({
  "location": "Scenario_6.c(String)"
});
formatter.result({
  "status": "skipped"
});
});