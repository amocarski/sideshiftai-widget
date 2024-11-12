## SideShift.ai Frontend Take-Home Exercise

Welcome to the SideShift.ai frontend take-home exercise! This task is designed to assess your skills in frontend development, UI/UX design, and your ability to own a project from concept to implementation.

### **Objective**

Recreate and enhance our coin selector component by designing and implementing a new filtering mechanism based on user feedback.

- **Main Goals:**
  - Replicate the current coin selector layout using provided references.
  - Design and implement a new filtering mechanism to improve user experience.
  - Showcase your design process, coding skills, and problem-solving abilities.

### **Requirements**

#### **Functional Requirements**

1. **Coin Selector Component:**

   - Create an application that prominently features the **coin selector component**.
     - You can have a simple interface where clicking a button opens the coin selector, or you can display it directly.
     - The coin selector is the primary focus of this exercise.

   - The coin selector should display a list of coins retrieved from our API endpoint:
     - **API Endpoint:** [https://docs.sideshift.ai/endpoints/v2/coins](https://docs.sideshift.ai/endpoints/v2/coins)

   - **Layout and UI Recreation:**
     - Replicate the existing coin selector layout as closely as possible, based on provided references.
     - Focus on matching UI components, styles, and overall look and feel.
     - **References:**
       - [Coin Selector with Balances](https://5e95acfd61135900220c3f78-frevqgegiv.chromatic.com/iframe.html?id=components-optionselector--with-balance&viewMode=story)
       - [Coin Selector with Pinned Options](https://5e95acfd61135900220c3f78-frevqgegiv.chromatic.com/iframe.html?id=components-optionselector--with-pinned-options&viewMode=story)
     - **Assets:**
     	- [Fonts](https://github.com/user-attachments/files/17525269/sideshift-fonts.zip)
     	- [Coin icons](https://github.com/user-attachments/files/17525288/coin-icons.zip)

2. **Filter Mechanism (Primary Focus):**

   - **Design and implement a new filtering mechanism** for the coin selector based on user feedback.

     - Users have expressed a desire for enhanced filtering options, but specifics are not provided.
     - You're encouraged to **creatively propose and implement a filtering solution** that improves user experience.
     - Consider what kinds of filters would be most useful (e.g., categories, networks, token types).

   - Implement the filter functionality within the coin selector.

   - **Considerations:**
     - Think about how the filters will enhance the usability of the coin selector.
     - If you have ideas on how filters should work within the overall user flow, please explain your approach in your documentation. 

#### **Bonus (if you still have some time left)**

The following features are not required but can earn you extra points if implemented after completing the main tasks:

1. **Optional UI Enhancements:**
     - If you have ideas on how to improve the Coin Selector UI or make adjustments for a better user experience, feel free to design/implement them.
     - If you do this, be sure to explain the diffs in your PR!

2. **Wallet Connectivity:**
   - Implement a **"Connect Wallet"** flow.
     - Add a "Connect Wallet" button to your application.
     - Upon clicking, allow the user to connect a cryptocurrency wallet (e.g., MetaMask).
     - Retrieve actual balances for each coin from the connected wallet.
     - Display the balances next to each coin in the coin selector.
     - **Note:** The specific technology for wallet connection is up to you.

#### **Technical Requirements**

- **Technology Stack:**
  - Use **React** and **TypeScript**.
  - Use your preferred way of using CSS.

- **Design Tools:**
  - You're welcome to use any tool you're comfortable with. We use Figma.

### **Deliverables**

1. **Pull Request:**

   - Submit your work via a pull request to the provided repository.
   - Ensure your PR is well-documented and includes all the deliverables.

2. **Design Artifacts:**

   - Any sketches, wireframes, or prototypes you created during your design process.
   - These can be included in a `/designs` directory or linked in your pull request description.

### **Submission Guidelines**

- **Communication:**

  - If you have any questions or need clarifications, feel free to reach out via **Telegram** at https://t.me/boriskubrik.
  - We encourage you to ask questions as needed; design doesn't happen in a vacuum!

- **Time Allocation:**

  - You have **7 days** to complete the exercise from the date you join this repository.
  - If you need additional time due to unforeseen circumstances, please let us know.

- **Testing:**

  - While not required, including unit tests can showcase your testing skills.

- **Creativity:**

  - Feel free to express your creativity within the scope of the task. We're interested in how you think and approach problems.

---

Looking forward to your PR!
