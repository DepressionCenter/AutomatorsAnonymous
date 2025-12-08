![Depression Center Logo](https://github.com/DepressionCenter/.github/blob/main/images/EFDCLogo_375w.png "depressioncenter.org")

# Automators Anonymous: RegEx Service

## Description
Flows for running regular expressions in Power Automate using an external REST-based API. This example uses a flow in TeamDynamix iPaaS to expose a service to process a regular expression and text. It receives the regex and text via HTTP, processes the regex in JavaScript, and returns the results in JSON format. In the Power Automate side, the example shows how to call this RegEx Service using the HTTP connector.


<img width="1694" height="516" alt="image" src="https://github.com/user-attachments/assets/19bd7d48-d286-40d7-a2cc-07e3a2ea664f" />



## Quick Start Guide
+ _Non U-M users:_ In TDX iPaaS, create a new flow by importing a definition, and paste the contents of [Service/iPaaS/RegExService.json](https://github.com/DepressionCenter/AutomatorsAnonymous/blob/main/RegExService/Service/iPaaS/RegExService.json). Alternatively, extract just the JavaScript if you plan to write the API in a different platform or web server. Once the RegEx Service is up and running, copy the URL.
+ _U-M users:_ Please request the URL to the RegEx Service from the Mobile Technologies Core (efdc-mobiletech@umich.edu).
+ Download the flow definition ( [Client/PowerAutomate/RegExClient.zip](https://github.com/DepressionCenter/AutomatorsAnonymous/blob/main/RegExService/Client/PowerAutomate/RegExClient.zip) ) and import it into [Power Automate](https://make.powerautomate.com). Alternatively, create a flow with three actions (steps):
  + Compose: Enter the input parameters in JSON format
  + HTTP: Paste the RegEx Service URL into the URI field, change the method to POST, add a parameter WaitForResults=true, and put the results of the previous compose into the Body
  + Parse JSON: Enter the Body of the previous HTTP action in Content, and click "Use sample payload to generate schema". Use this as the sample: {"data":{"ResultValue":[""],"ResultCode":200}}
+ In Power Automate, edit the HTTP action and paste the correct RegEx Service URL
+ Run the Power Automate flow to test it
  + Sample input: {"Text": "This is a famous test", "Pattern": "famous+.*","Method": "match"}
  + Sample output: ["famous test"]



## Documentation
+ Further documentation maybe available at the Depression Center's Health Research Resource Library Knowledge Base: [https://michmed.org/efdc-kb](https://michmed.org/efdc-kb?ID=41def269-3e66-42e9-b2c6-1e631e23c837).




## Additional Resources
+ W3Schools - [RegExp Methods -> RegExp String Methods](https://www.w3schools.com/js/js_regexp_methods.asp)
+ Eisenberg Family Depression Center - [Health Research Resource Library](https://teamdynamix.umich.edu/TDClient/210/DepressionCenter/Home/)




## About the Team
The Power Automate Lab started as a means to collaborate and problem-solve together. It is comprised of Power Platform users from different business, research and IT positions throughout Michigan Medicine and University of Michigan. We jokingly called our first in-person meeting the "Automators Anonymous" meeting, so the name seemed fitting for this code repository.



## Contact
To get in touch, contact the individual developers in the check-in history.

If you need assistance identifying a contact person, email the project maintainers at: efdc-mobiletech@umich.edu.



## Credits
#### Contributors:
+ Eisenberg Family Depression Center [(@DepressionCenter)](https://github.com/DepressionCenter/).
+ [Gabriel Mongefranco](https://gabriel.mongefranco.com) [(@gabrielmongefranco)](https://github.com/gabrielmongefranco) - Mobile Data Architect, Eisenberg Family Depression Center.
+ [Jeremy Gluskin](https://mcommunity.umich.edu/person/jgluskin) [(@jerm-ops)](https://github.com/jerm-ops) - Revenue Lifecycle System Coordinator, Quality - Patient Safety, Michigan Medicine.



#### This work is based in part on the following projects, libraries and/or studies:
+ None.



## License
### Copyright Notice
Copyright © 2025 The Regents of the University of Michigan


### Software and Library License Notice
This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with this program. If not, see <https://www.gnu.org/licenses/gpl-3.0-standalone.html>.


### Documentation License Notice
Permission is granted to copy, distribute and/or modify this document 
under the terms of the GNU Free Documentation License, Version 1.3 
or any later version published by the Free Software Foundation; 
with no Invariant Sections, no Front-Cover Texts, and no Back-Cover Texts. 
You should have received a copy of the license included in the section entitled "GNU 
Free Documentation License". If not, see <https://www.gnu.org/licenses/fdl-1.3-standalone.html>



## Citation
If you find this repository, code or paper useful for your research, please cite it.

----

Copyright © 2025 The Regents of the University of Michigan
