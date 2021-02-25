## Instructions

### Context

One of the most used **Expert Pro** features is the Email Marketing section. Expert Pro allows the brokers to send marketing campaigns to their past clients, potential leads, or referrals. They do this by managing their contact lists. Expert Pro allows them to import contacts from multiple sources, some of them are:

1. From their application list.
2. From CSV or plain text emails.
3. From their client profiles.

Once imported, they can segment the contact list to trigger audience-specific campaigns. Assuming they have enough data on contacts to segment it properly, they want to be sure to aptly construct them to be able to target these specific clients based on their details.

Thus, brokers can segment their contact list based on details like mortgage value, mortgage renewal date, client creation date, application status, and others.

### Data Structure

```json
[
  {
    emailId: 84628,
    email: "Alyce_Dooley@yahoo.com",
    givenName: "Korey Tillman",
    familyName: "Dulce Murray",
    referrer: {
      id: 46833,
      email: "Zechariah_Schiller83@hotmail.com",
      givenName: "Sadie Grady",
      familyName: "Zelma Huel",
    },
    closingDate: "2020-11-15T09:35:05.922Z",
    firstPaymentDate: "2020-07-30T03:40:32.511Z",
    clientCreatedDate: "2021-06-29T09:42:31.125Z",
    mortgageRenewalDate: "2020-08-13T08:31:04.916Z",
    value: 54545444.44
  }
];
```

There is **1 screenshot** attached that shows the page in the platform where they can segment their contacts

### Steps

1. Re-assemble the `Manage Contacts` View as shown in the screenshot (only the right side).
2. Implement the segments creation page where the brokers can add different conditions based on the contact's details. The rules will be explained below.
3. Implement the `+` sign next to the `All Contacts` tab, where the user can add more segments to the list and navigate between tabs. This button will create a brand new segment with only one empty condition.

### Rules

1. There is one pivot field that defines the value that should be used to segment. The conditions for each pivot field depends on their data type. There may be many pivots, like Client Created Date, Client Value, Referrer, Application Status, First Payment Date, and Mortgage Renewal Date.

   - **Date Fields** (i.e Mortgage Renewal Date)
     Conditions can be: `Is between`, `Is larger than`, `Is Less than`, and `Is`.
     Valid values: YYYY-MM-DD (2016-06-07). When using Is Between, the Start Date and End Dates should be validated.

   - **Number Fields** (i.e Value)
     Conditions can be: `Is between`, `Is larger than`, `Is Less than`, and `Is`.
     Valid values: Any number

   - **Multi-select Fields** (i.e Application Status, Referrer)
     The condition can be: `Is`.
     Valid Values: For Application Status, the user can select: Pending, Under Review and Completed.
     For Referrer, the user can select multiple items from the broker's referrer list.

2. The segments can be either inclusive or exclusive. That is, brokers can segment based on two options:

   - **any** of the conditions met.
   - **all** the conditions are met.

3. The user input should be validated. Their value should match their data types and the valid values above.

### Expected output

1.  After the segment has been successfully created, it should show **only** the contacts that meet the segment's conditions.
2.  The `all contacts` tab should show them all without any segmentation.

### Manage Contacts
![Manage Contacts](https://user-images.githubusercontent.com/36055258/109206924-2ba3bd80-77b1-11eb-81dd-ec3e1297b588.png)

### Segments 
![Segments](https://user-images.githubusercontent.com/36055258/109206926-2c3c5400-77b1-11eb-8bc4-92f369838039.png)
