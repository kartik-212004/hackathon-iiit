const AboutUs = () => {
  const teamMembers = [
    {
      name: "Kartik",
      role: "Frontend Developer",
<<<<<<< HEAD
      image: "/static/images/kartik.jpg",
=======
      image: "/kartik.jpg",
>>>>>>> 55353b2aded3e443664dad7b463846a6d92eddb1
      github: "https://github.com/kartik-212004",
    },
    {
      name: "Devashish",
      role: "Backend Developer",
<<<<<<< HEAD
      image: "/static/images/devashish.jpg",
=======
      image: "/deva.jpg",
>>>>>>> 55353b2aded3e443664dad7b463846a6d92eddb1
      github: "https://github.com/Devashish2112",
    },
    {
      name: "Akshat",
      role: "Ai Model Developer",
<<<<<<< HEAD
      image: "/static/images/akshat.jpg",
=======
      image: "/akshat.jpg",
>>>>>>> 55353b2aded3e443664dad7b463846a6d92eddb1
      github: "https://github.com/aks-lodhi07",
    },
    {
      name: "Shivansh",
<<<<<<< HEAD
      role: "PPt Developer",
      image: "/static/images/shivansh.jpg",
=======
      role: "Ui/Ux Developer",
      image: "/shiva.jpg",
>>>>>>> 55353b2aded3e443664dad7b463846a6d92eddb1
      github: "https://github.com/ShivanshPokhriyal",
    },
  ]

  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 min-h-screen py-20 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold text-white mb-8 animate-bounce">
          Meet The OG's
        </h1>
        <p className="text-xl text-white mb-12">
          We are a passionate group of developers participating in a Hackathon
          at IIIT Gwalior.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:bg-purple-100"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 object-cover mx-auto rounded-full shadow-lg mb-6 transition-transform duration-500 hover:rotate-6"
              />
              <h2 className="text-2xl font-semibold mb-2">{member.name}</h2>
              <p className="text-gray-700 font-medium">{member.role}</p>
              <div className="mt-4">
                <a
                  href={member.github}
                  className="inline-block px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300"
                >
                  Connect
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h2 className="text-3xl text-white font-bold mb-4">
            Hackathon at IIIT Gwalior
          </h2>
          <p className="text-white text-lg max-w-3xl mx-auto">
            We are thrilled to be part of this exciting journey. The OG's are
            here to make a difference, building innovative solutions that will
            leave a lasting impact. Stay tuned for what we create during this
            Hackathon!
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
