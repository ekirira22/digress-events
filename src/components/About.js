// about.js

export default function About() {
  const aboutInfo = {
    companyName: "Digress Events",
    aboutUs:
      "Welcome to Digress Events, your premier destination for buying and selling event tickets. We strive to provide a seamless and secure platform for event organizers, performers, and ticket buyers.",
    mission:
      "Our mission is to connect people through live experiences, fostering a vibrant community around events of all kinds. Whether it's concerts, sports, theater, or special events, Digress Events is your go-to ticketing solution.",
    contact: {
      email: "info@digressevents.com",
      phone: "+254(7)00000000",
      address: "1799, Nairobi, Kenya",
      socialMedia: {
        twitter: "@DigressEvents",
        facebook: "/DigressEvents",
        instagram: "@digressevents",
      },
    },
    // Add any other relevant information you want to include
  };

 

  return (
    <div className="mx-40 m-auto mt-10">
      <div >
        <img className="w-full" src="https://i0.wp.com/amaa.org/wp-content/uploads/2017/09/upcoming-events-banner-960x250.jpg?ssl=1" alt="banner"></img>
      </div>
      <div class="about-section mt-10 mb-14 ">
          <h2 class="uppercase text-xl font-bold text-red-500">{aboutInfo.companyName}</h2>
          <p>{aboutInfo.aboutUs}</p>
        </div>

        <div class="mission-section mt-10 mb-14 ">
          <h3 class="uppercase  text-xl font-bold text-red-500">Mission</h3>
          <p>{aboutInfo.mission}</p>
        </div>

        <div class="contact-section mt-10 mb-14 ">
          <h3 class="uppercase text-xl font-bold text-red-500">Contact Information</h3>
          <ul class="list-none p-0">
            <li class="mt-2">Email: {aboutInfo.contact.email} </li>
            <li class="mt-2">Phone:{aboutInfo.contact.phone}</li>
            <li class="mt-2">Address: {aboutInfo.contact.address}</li>
            <li class="mt-2">Twitter: {aboutInfo.contact.socialMedia.twitter}</li>
          <li class="mt-2">Facebook: {aboutInfo.contact.socialMedia.facebook}</li>
            <li class="mt-2">Instagram: {aboutInfo.contact.socialMedia.instagram}</li>
          </ul>
        </div>
    </div>
  )
}
