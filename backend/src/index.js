"use strict";

const DATA = [
  {
    name: "Chandni Adiga",
    phone: "+91-936-7465798",
    email: "Agrata.Marar@gmail.com",
    standard: 12,
    roll: 35,
    section: "D",
  },
  {
    name: "Harita Verma",
    phone: "+919624012262",
    email: "Rukmin_Pilla26@gmail.com",
    standard: 4,
    roll: 45,
    section: "B",
  },
  {
    name: "Balagopal Acharya",
    phone: "+918676026130",
    email: "Sameer_Trivedi@hotmail.com",
    standard: 3,
    roll: 45,
    section: "A",
  },
  {
    name: "Meena Kaur III",
    phone: "+91-708-0393259",
    email: "Aryan61@gmail.com",
    standard: 12,
    roll: 43,
    section: "D",
  },
  {
    name: "Gautam Ahluwalia",
    phone: "+91-686-5407563",
    email: "Chanda_Pilla@yahoo.co.in",
    standard: 2,
    roll: 6,
    section: "D",
  },
  {
    name: "Mina Dhawan",
    phone: "+919885869864",
    email: "Shrishti.Reddy@hotmail.com",
    standard: 4,
    roll: 4,
    section: "B",
  },
  {
    name: "Pramila Sethi",
    phone: "+917457451384",
    email: "Padma_Rana@gmail.com",
    standard: 5,
    roll: 6,
    section: "B",
  },
  {
    name: "Damayanti Sethi",
    phone: "+91821-977-6792",
    email: "Chandrabhaga_Desai91@gmail.com",
    standard: 4,
    roll: 44,
    section: "B",
  },
  {
    name: "Bhushit Namboothiri",
    phone: "+918026930475",
    email: "Javas71@yahoo.co.in",
    standard: 7,
    roll: 39,
    section: "A",
  },
  {
    name: "Akula Tagore",
    phone: "+919593774253",
    email: "Jai59@hotmail.com",
    standard: 8,
    roll: 32,
    section: "B",
  },
  {
    name: "Eshita Gandhi",
    phone: "+91-648-7262258",
    email: "Prasad.Iyengar24@hotmail.com",
    standard: 8,
    roll: 41,
    section: "C",
  },
  {
    name: "Ms. Geeta Johar",
    phone: "+91681-951-5279",
    email: "Nawal_Malik66@hotmail.com",
    standard: 11,
    roll: 22,
    section: "C",
  },
  {
    name: "Miss Lila Mishra",
    phone: "+916513409040",
    email: "Bhudeva25@yahoo.co.in",
    standard: 8,
    roll: 33,
    section: "A",
  },
  {
    name: "Tushar Panicker",
    phone: "+918018523218",
    email: "Ghanashyam_Mehra74@gmail.com",
    standard: 5,
    roll: 41,
    section: "A",
  },
  {
    name: "Miss Kumari Shukla",
    phone: "+916541785931",
    email: "Ekaling_Gill@hotmail.com",
    standard: 8,
    roll: 4,
    section: "C",
  },
  {
    name: "Ashlesh Pillai-Verma",
    phone: "+91-869-2014616",
    email: "Chakravartee82@yahoo.co.in",
    standard: 9,
    roll: 46,
    section: "C",
  },
  {
    name: "Sher Bharadwaj",
    phone: "+91-808-4267030",
    email: "Priyala52@yahoo.co.in",
    standard: 12,
    roll: 42,
    section: "C",
  },
  {
    name: "Javas Guneta",
    phone: "+91-791-5833004",
    email: "Kiran_Guha@gmail.com",
    standard: 3,
    roll: 12,
    section: "C",
  },
  {
    name: "Mohinder Chopra",
    phone: "+919968819118",
    email: "Kanchan_Khatri-Ahluwalia@hotmail.com",
    standard: 1,
    roll: 4,
    section: "C",
  },
  {
    name: "Bharadwaj Talwar",
    phone: "+91757-492-6855",
    email: "Sukanya70@yahoo.co.in",
    standard: 2,
    roll: 4,
    section: "D",
  },
  {
    name: "Poornima Bhadresha",
    phone: "+91-670-6521873",
    email: "Kannen.Shah99@hotmail.com",
    standard: 3,
    roll: 31,
    section: "C",
  },
  {
    name: "Dr. Shivakari Guha",
    phone: "+91724-697-0851",
    email: "Chandramohan_Chopra24@gmail.com",
    standard: 1,
    roll: 46,
    section: "A",
  },
  {
    name: "Vedang Trivedi",
    phone: "+91-615-2715435",
    email: "Deepan10@yahoo.co.in",
    standard: 5,
    roll: 12,
    section: "C",
  },
  {
    name: "Baalaaditya Nair MD",
    phone: "+918060682724",
    email: "Bhoj_Reddy@gmail.com",
    standard: 7,
    roll: 9,
    section: "A",
  },
  {
    name: "Mahendra Guneta",
    phone: "+91-944-1219734",
    email: "Himani.Ahuja28@hotmail.com",
    standard: 12,
    roll: 7,
    section: "C",
  },
  {
    name: "Harinakshi Banerjee",
    phone: "+91994-581-8534",
    email: "Eekalabya72@hotmail.com",
    standard: 1,
    roll: 19,
    section: "A",
  },
  {
    name: "Jagathi Kaniyar",
    phone: "+917638383609",
    email: "Chidambar81@gmail.com",
    standard: 5,
    roll: 27,
    section: "B",
  },
  {
    name: "Charuvrat Tandon",
    phone: "+91-791-0608734",
    email: "Shiv_Mahajan63@yahoo.co.in",
    standard: 6,
    roll: 21,
    section: "C",
  },
  {
    name: "Ghanashyam Jangid",
    phone: "+91-724-5197125",
    email: "Rameshwar36@gmail.com",
    standard: 11,
    roll: 24,
    section: "A",
  },
  {
    name: "Nalini Naik",
    phone: "+91837-541-0066",
    email: "Kumar39@yahoo.co.in",
    standard: 8,
    roll: 27,
    section: "A",
  },
  {
    name: "Paramartha Mishra",
    phone: "+919536650255",
    email: "Girik66@hotmail.com",
    standard: 2,
    roll: 11,
    section: "A",
  },
  {
    name: "Dr. Dhanpati Gandhi",
    phone: "+918630870937",
    email: "Indira14@yahoo.co.in",
    standard: 12,
    roll: 15,
    section: "A",
  },
  {
    name: "Chiranjeeve Chaturvedi",
    phone: "+91799-470-9305",
    email: "Chandani_Kakkar8@gmail.com",
    standard: 9,
    roll: 40,
    section: "B",
  },
  {
    name: "Tara Gill",
    phone: "+916169152440",
    email: "Shobhana_Trivedi87@yahoo.co.in",
    standard: 3,
    roll: 36,
    section: "A",
  },
  {
    name: "Bhaumik Kakkar",
    phone: "+91-616-9143058",
    email: "Adwitiya.Mukhopadhyay5@hotmail.com",
    standard: 1,
    roll: 14,
    section: "D",
  },
  {
    name: "Agnivesh Kocchar Sr.",
    phone: "+91933-431-7672",
    email: "Kalyani_Chaturvedi50@hotmail.com",
    standard: 3,
    roll: 12,
    section: "B",
  },
  {
    name: "Baijayanti Arora",
    phone: "+91955-460-2430",
    email: "Anjaneya.Devar26@gmail.com",
    standard: 9,
    roll: 3,
    section: "D",
  },
  {
    name: "Dr. Susheel Deshpande-Nair",
    phone: "+91-793-6246213",
    email: "Dhruv23@hotmail.com",
    standard: 6,
    roll: 4,
    section: "C",
  },
  {
    name: "Shresth Pilla",
    phone: "+91-959-4726640",
    email: "Gajbaahu_Saini51@hotmail.com",
    standard: 11,
    roll: 13,
    section: "D",
  },
  {
    name: "Chandini Dubashi",
    phone: "+91731-497-1273",
    email: "Aalok35@gmail.com",
    standard: 8,
    roll: 31,
    section: "D",
  },
  {
    name: "Kirti Khatri",
    phone: "+91-673-9343878",
    email: "Shridevi.Khatri@gmail.com",
    standard: 5,
    roll: 1,
    section: "C",
  },
  {
    name: "Adinath Patil",
    phone: "+91-804-2011681",
    email: "Darshan_Varma@hotmail.com",
    standard: 10,
    roll: 26,
    section: "D",
  },
  {
    name: "Aishani Mehrotra",
    phone: "+91-679-6035985",
    email: "Chidambar31@hotmail.com",
    standard: 1,
    roll: 28,
    section: "D",
  },
  {
    name: "Atreyi Ahluwalia",
    phone: "+91832-627-1663",
    email: "Bhargava_Sinha@yahoo.co.in",
    standard: 1,
    roll: 40,
    section: "B",
  },
  {
    name: "Subhashini Ahluwalia",
    phone: "+91-731-6325291",
    email: "Acharyanandana18@hotmail.com",
    standard: 1,
    roll: 49,
    section: "B",
  },
  {
    name: "Mukul Chopra",
    phone: "+919763127366",
    email: "Guru_Naik@yahoo.co.in",
    standard: 3,
    roll: 44,
    section: "D",
  },
  {
    name: "Deepali Desai",
    phone: "+916799803054",
    email: "Shanti_Gowda40@yahoo.co.in",
    standard: 12,
    roll: 38,
    section: "B",
  },
  {
    name: "Daiwik Gowda",
    phone: "+91760-044-9959",
    email: "Chiranjeeve0@hotmail.com",
    standard: 2,
    roll: 8,
    section: "C",
  },
  {
    name: "Chandraswaroopa Bharadwaj",
    phone: "+917193803797",
    email: "Baala2@gmail.com",
    standard: 9,
    roll: 50,
    section: "D",
  },
  {
    name: "Bhardwaj Prajapat",
    phone: "+91-937-5557238",
    email: "Chakravarti_Shukla82@gmail.com",
    standard: 3,
    roll: 47,
    section: "A",
  },
  {
    name: "Mandaakin Singh-Malik",
    phone: "+91808-434-4247",
    email: "Chandini9@hotmail.com",
    standard: 7,
    roll: 24,
    section: "A",
  },
  {
    name: "Anila Suthar",
    phone: "+91988-398-3777",
    email: "Samir63@yahoo.co.in",
    standard: 3,
    roll: 32,
    section: "C",
  },
  {
    name: "Varalakshmi Singh",
    phone: "+919381754229",
    email: "Bhoopat_Gowda@yahoo.co.in",
    standard: 9,
    roll: 42,
    section: "A",
  },
  {
    name: "Ayushmati Malik-Kaniyar IV",
    phone: "+919415649039",
    email: "Atmanand.Patil97@hotmail.com",
    standard: 10,
    roll: 31,
    section: "C",
  },
  {
    name: "Mangalya Suthar",
    phone: "+91-673-7000182",
    email: "Archan.Marar11@gmail.com",
    standard: 12,
    roll: 42,
    section: "C",
  },
  {
    name: "Mrs. Padma Bhat",
    phone: "+91-639-9802091",
    email: "Tanirika.Jangid40@yahoo.co.in",
    standard: 4,
    roll: 7,
    section: "A",
  },
  {
    name: "Chandrabhaga Bhattacharya",
    phone: "+91776-034-5409",
    email: "Mahendra.Jangid@hotmail.com",
    standard: 5,
    roll: 28,
    section: "C",
  },
  {
    name: "Vasudeva Pillai",
    phone: "+917117430460",
    email: "Vishwamitra.Trivedi@gmail.com",
    standard: 1,
    roll: 13,
    section: "D",
  },
  {
    name: "Girika Malik",
    phone: "+91700-660-4466",
    email: "Anil45@hotmail.com",
    standard: 7,
    roll: 6,
    section: "A",
  },
  {
    name: "Nimit Embranthiri III",
    phone: "+91902-374-8311",
    email: "Chaturaanan.Mishra66@yahoo.co.in",
    standard: 8,
    roll: 15,
    section: "B",
  },
  {
    name: "Gautami Gandhi",
    phone: "+917732642779",
    email: "Ramaa.Patil@gmail.com",
    standard: 8,
    roll: 16,
    section: "D",
  },
  {
    name: "Guru Varman",
    phone: "+91-867-2687702",
    email: "Gandharva.Dhawan-Singh35@hotmail.com",
    standard: 1,
    roll: 42,
    section: "C",
  },
  {
    name: "Ganesh Arora",
    phone: "+91-779-2711190",
    email: "Deepan33@gmail.com",
    standard: 11,
    roll: 21,
    section: "C",
  },
  {
    name: "Chidambar Iyengar",
    phone: "+91725-485-7178",
    email: "Sunita42@gmail.com",
    standard: 10,
    roll: 45,
    section: "A",
  },
  {
    name: "Chandira Arora PhD",
    phone: "+917565300508",
    email: "Sarala99@gmail.com",
    standard: 9,
    roll: 40,
    section: "A",
  },
  {
    name: "Dr. Sushil Kakkar",
    phone: "+91975-729-9931",
    email: "Vrund_Ganaka@hotmail.com",
    standard: 7,
    roll: 35,
    section: "D",
  },
  {
    name: "Mr. Chaturbhuj Gupta",
    phone: "+91-955-0395880",
    email: "Chandra.Nambeesan@yahoo.co.in",
    standard: 2,
    roll: 28,
    section: "C",
  },
  {
    name: "Mrs. Kali Dhawan",
    phone: "+91-786-5746513",
    email: "Lakshmi_Bhattacharya72@yahoo.co.in",
    standard: 2,
    roll: 29,
    section: "C",
  },
  {
    name: "Anilaabh Embranthiri V",
    phone: "+919810258267",
    email: "Bhadra.Chopra48@yahoo.co.in",
    standard: 5,
    roll: 19,
    section: "B",
  },
  {
    name: "Anagh Bhattathiri",
    phone: "+916103915216",
    email: "Bhadraksh_Ganaka57@gmail.com",
    standard: 1,
    roll: 13,
    section: "B",
  },
  {
    name: "Anurag Joshi",
    phone: "+916911104720",
    email: "Dwaipayan_Namboothiri36@gmail.com",
    standard: 12,
    roll: 32,
    section: "B",
  },
  {
    name: "Gauraang Chopra",
    phone: "+91-984-9457587",
    email: "Shakuntala.Gowda75@gmail.com",
    standard: 3,
    roll: 39,
    section: "A",
  },
  {
    name: "Varalakshmi Shukla-Acharya",
    phone: "+91-752-9149293",
    email: "Gauraang.Prajapat46@gmail.com",
    standard: 12,
    roll: 34,
    section: "A",
  },
  {
    name: "Sucheta Verma-Jha PhD",
    phone: "+919349419191",
    email: "Siddhran58@yahoo.co.in",
    standard: 11,
    roll: 8,
    section: "B",
  },
  {
    name: "Aaratrika Tagore",
    phone: "+91-957-4436191",
    email: "Chandni.Dwivedi@hotmail.com",
    standard: 1,
    roll: 49,
    section: "D",
  },
  {
    name: "Chandni Adiga",
    phone: "+91-785-0268640",
    email: "Bakula76@gmail.com",
    standard: 2,
    roll: 3,
    section: "C",
  },
  {
    name: "Meghnad Acharya",
    phone: "+91777-091-0072",
    email: "Brahma.Naik28@yahoo.co.in",
    standard: 10,
    roll: 31,
    section: "C",
  },
  {
    name: "Dr. Ekadant Kapoor",
    phone: "+91973-367-8038",
    email: "Bhadra.Bandopadhyay33@yahoo.co.in",
    standard: 2,
    roll: 4,
    section: "A",
  },
  {
    name: "Mrs. Gita Singh",
    phone: "+91-622-4172477",
    email: "Tanirika_Mukhopadhyay@gmail.com",
    standard: 9,
    roll: 26,
    section: "B",
  },
  {
    name: "Sanka Patel",
    phone: "+91-601-8444310",
    email: "Baladitya93@gmail.com",
    standard: 6,
    roll: 16,
    section: "D",
  },
  {
    name: "Nirbhay Chaturvedi",
    phone: "+916616821688",
    email: "Deeptimoyee94@gmail.com",
    standard: 2,
    roll: 11,
    section: "A",
  },
  {
    name: "Dr. Devasree Sinha-Iyengar",
    phone: "+919085704762",
    email: "Bhamini63@yahoo.co.in",
    standard: 9,
    roll: 25,
    section: "B",
  },
  {
    name: "Elakshi Acharya",
    phone: "+91-984-5056085",
    email: "Shreyashi65@hotmail.com",
    standard: 11,
    roll: 41,
    section: "B",
  },
  {
    name: "Mangalya Verma",
    phone: "+919525925417",
    email: "Dhanpati.Bandopadhyay@hotmail.com",
    standard: 5,
    roll: 46,
    section: "B",
  },
  {
    name: "Triloki Dubashi",
    phone: "+919757961358",
    email: "Subhash60@hotmail.com",
    standard: 6,
    roll: 43,
    section: "B",
  },
  {
    name: "Jagdeep Reddy",
    phone: "+91821-400-2525",
    email: "Jaimini.Arora@yahoo.co.in",
    standard: 4,
    roll: 47,
    section: "C",
  },
  {
    name: "Anusuya Singh",
    phone: "+91727-033-2417",
    email: "Sarla88@gmail.com",
    standard: 3,
    roll: 7,
    section: "C",
  },
  {
    name: "Draupadi Reddy-Iyer II",
    phone: "+91-916-9671215",
    email: "Bhushan_Devar87@yahoo.co.in",
    standard: 9,
    roll: 29,
    section: "B",
  },
  {
    name: "Dharitri Sethi",
    phone: "+916564258860",
    email: "Keerti.Iyer6@hotmail.com",
    standard: 3,
    roll: 29,
    section: "C",
  },
  {
    name: "Mr. Prayag Khanna",
    phone: "+919757100863",
    email: "Chandrakin.Khatri79@hotmail.com",
    standard: 10,
    roll: 4,
    section: "C",
  },
  {
    name: "Manjusha Khanna",
    phone: "+916420728158",
    email: "Ramaa_Naik38@hotmail.com",
    standard: 6,
    roll: 29,
    section: "A",
  },
  {
    name: "Anal Namboothiri",
    phone: "+917104716729",
    email: "Chapal_Saini@gmail.com",
    standard: 5,
    roll: 37,
    section: "C",
  },
  {
    name: "Bhaanumati Pilla",
    phone: "+916841287241",
    email: "Bhagwati76@hotmail.com",
    standard: 11,
    roll: 1,
    section: "D",
  },
  {
    name: "Mrs. Jaya Acharya II",
    phone: "+91-744-7962407",
    email: "Dwaipayan_Gupta59@gmail.com",
    standard: 5,
    roll: 7,
    section: "D",
  },
  {
    name: "Sitara Guneta",
    phone: "+917838922793",
    email: "Devesh_Tagore-Prajapat@yahoo.co.in",
    standard: 7,
    roll: 43,
    section: "C",
  },
  {
    name: "Uma Khan DVM",
    phone: "+91606-888-5857",
    email: "Chinmayananda_Dwivedi@hotmail.com",
    standard: 2,
    roll: 14,
    section: "B",
  },
  {
    name: "Mrs. Ahilya Chattopadhyay",
    phone: "+917645305212",
    email: "Kama.Embranthiri@yahoo.co.in",
    standard: 5,
    roll: 5,
    section: "C",
  },
  {
    name: "Niranjan Sharma",
    phone: "+918571180011",
    email: "Eekalabya79@hotmail.com",
    standard: 3,
    roll: 9,
    section: "D",
  },
  {
    name: "Bhilangana Chaturvedi",
    phone: "+91-806-7115563",
    email: "Rudra_Joshi5@hotmail.com",
    standard: 6,
    roll: 40,
    section: "D",
  },
  {
    name: "Prayag Khatri",
    phone: "+91-971-3721844",
    email: "Manik.Nambeesan1@hotmail.com",
    standard: 11,
    roll: 25,
    section: "D",
  },
];

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap({ strapi }) {
    DATA.forEach(async (item) => {
      const entry = await strapi.entityService.create("api::student.student", {
        data: {
          ...item,
          publishedAt: Date.now(),
        },
      });
    });
    console.log("ALL DATA IMPORTED!");
  },
};
