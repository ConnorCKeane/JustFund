import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css"; // AOS animations
import Sidebar from "../components/Sidebar";
import "./ProductListing.css";

// Interface for an Event type
interface Event {
  eventId: string;
  title: string;
  description: string;
  imageUrl: string;
  isPrivate?: boolean;
  link: string; // Added link property
}

const EventListing: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  // Test events
  const events: Event[] = [
    {
      eventId: "1",
      title: "Southern Poverty Law Center (SPLC)",
      description:
        "The Southern Poverty Law Center is a human rights organization dedicated to dismantling white supremacy, confronting hate groups, protecting vulnerable populations in the South, and providing critical resources to those in need.",
      imageUrl: "/splc.png",
      isPrivate: false,
      link: "https://www.splcenter.org",
    },
    {
      eventId: "2",
      title: "International Organization for Migration",
      description:
        "The International Organization for Migration, part of the United Nations system, supports migrants globally by promoting humane, orderly migration and assisting governments in upholding migrants’ rights and dignity.",
      imageUrl: "/iom.png",
      isPrivate: false,
      link: "https://www.iom.int",
    },
    {
      eventId: "3",
      title: "Native American Rights Fund (NARF)",
      description:
        "The Native American Rights Fund provides legal assistance to Native Americans and tribes, advises policymakers, and drafts legislation to protect their rights, resources, and sovereignty.",
      imageUrl: "/narf.png",
      isPrivate: true,
      link: "https://narf.org",
    },
    {
      eventId: "4",
      title: "Media Justice",
      description:
        "Media Justice advocates for universal media and technology access, emphasizing its importance for empowering marginalized communities and addressing racial, economic, and gender justice in the digital age.",
      imageUrl: "/mediajustice.png",
      isPrivate: false,
      link: "https://mediajustice.org",
    },
    {
      eventId: "5",
      title: "National Fair Housing Alliance (NFHA)",
      description:
        "The National Fair Housing Alliance is a civil rights organization dedicated to eliminating housing and lending discrimination through initiatives in homeownership, credit access, education, policy, and community development.",
      imageUrl: "/nfha.png",
      isPrivate: false,
      link: "https://nationalfairhousing.org",
    },
    {
      eventId: "6",
      title: "First Step Alliance",
      description:
        "First Step Alliance supports justice-involved individuals by improving access to financial education, banking services, and is establishing a federal credit union to aid their reentry and financial independence.",
      imageUrl: "/firststepalliance.png",
      isPrivate: false,
      link: "https://www.firststepalliance.org",
    },
    {
      eventId: "7",
      title: "Girls Inc",
      description:
        "Girls Inc. empowers young girls through mentoring, pro-girl environments, and programs to build self-esteem, strength, and independence while overcoming social, economic, and gender barriers.",
      imageUrl: "/girlsinc.png",
      isPrivate: false,
      link: "https://www.girlsinc.org",
    },
    {
      eventId: "8",
      title: "First Star",
      description:
        "First Star is a national organization that helps foster children succeed by providing academic support, life skills, and adult guidance for their transition to adulthood.",
      imageUrl: "/firststar.jpg",
      isPrivate: false,
      link: "https://www.firststar.org",
    },
  ];

  const handleCardClick = (event: Event) => {
    setSelectedEvent(event);
  };

  const closeEventModal = () => {
    setSelectedEvent(null);
  };

  return (
    <div>
      {/* Sidebar rendered on the left */}
      <Sidebar />

      {/* Main content container offset to prevent overlapping with the sidebar */}
      <div
        style={{
          marginLeft: "200px",
          width: "calc(100% - 200px)",
          backgroundColor: "#fcf7ed",
        }}
      >
        {/* Header */}
        <div className="container">
          <div
            className="row align-items-center mb-4"
            style={{ paddingTop: "60px" }}
          >
            <div className="col-12 text-center">
              <h1 style={{ fontWeight: "bold", color: "#4d7a57" }}>
                Act Now
              </h1>
              <p style={{ color: "#4d7a57" }}>
                Explore both local and global activism initiatives—all personally vetted by us! (Verification provided via CharityWatch)
              </p>
            </div>
          </div>
        </div>

        {/* Render Events */}
        <div
          className="row justify-content-around mt-5 d-flex flex-wrap"
          style={{
            width: "100%",
            justifyContent: "space-around",
            paddingLeft: "17px",
            backgroundColor: "#fcf7ed",
          }}
        >
          {events.map((event) => (
            <div className="col-md-3 mb-4" key={event.eventId}>
              <div
                className="card h-100 d-flex flex-column position-relative product-card shadow-lg rounded hover-scale"
                onClick={() => handleCardClick(event)}
                style={{ transition: "transform 0.2s, box-shadow 0.2s" }}
              >
                {event.imageUrl && (
                  <img
                    src={event.imageUrl}
                    className="card-img-top"
                    alt={event.title}
                    style={{
                      objectFit: "cover",
                      height: "200px",
                      borderTopLeftRadius: "10px",
                      borderTopRightRadius: "10px",
                    }}
                  />
                )}
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title" style={{ color: "#4d7a57" }}>
                    {event.title}
                  </h5>
                  <p className="card-text flex-grow-1" style={{ color: "#4d7a57" }}>
                    {event.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Event Detail Modal */}
        {selectedEvent && (
          <div
            className="modal fade show d-block"
            tabIndex={-1}
            role="dialog"
            style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
          >
            <div
              className="modal-dialog"
              role="document"
              style={{
                maxWidth: "800px",
                width: "100%",
                minWidth: "600px",
                margin: "auto",
                position: "fixed",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                minHeight: "400px",
              }}
            >
              <div
                className="modal-content"
                style={{ display: "flex", flexDirection: "row", minHeight: "400px" }}
              >
                <div style={{ width: "50%", overflow: "hidden" }}>
                  <img
                    src={selectedEvent.imageUrl}
                    alt={selectedEvent.title}
                    style={{ objectFit: "cover", height: "100%", width: "100%" }}
                  />
                </div>
                <div
                  className="modal-body"
                  style={{
                    padding: "20px",
                    width: "50%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    position: "relative",
                  }}
                >
                  <div>
                    <h2
                      style={{
                        marginBottom: "10px",
                        wordWrap: "break-word",
                        color: "#4d7a57",
                      }}
                    >
                      {selectedEvent.title}
                    </h2>
                    {selectedEvent.isPrivate && (
                      <h6 style={{ color: "#4d7a57", marginBottom: "20px" }}>
                        Organizer: Private
                      </h6>
                    )}
                    <p style={{ color: "#4d7a57" }}>
                      {selectedEvent.description}
                    </p>
                  </div>
                  <a
                    href={selectedEvent.link} // Uses the specific event's link
                    target="_blank" // Opens in a new tab
                    rel="noopener noreferrer" // Security best practice
                    className="btn"
                    style={{
                      alignSelf: "flex-start",
                      marginTop: "10px",
                      backgroundColor: "#4d7a57",
                      color: "white",
                      textDecoration: "none",
                      padding: "10px 15px",
                      borderRadius: "5px",
                      display: "inline-block",
                    }}
                  >
                    Take Action!
                  </a>
                  <button
                    type="button"
                    style={{
                      position: "absolute",
                      top: "10px",
                      right: "10px",
                      backgroundColor: "transparent",
                      border: "none",
                      fontSize: "24px",
                      cursor: "pointer",
                    }}
                    aria-label="Close"
                    onClick={closeEventModal}
                  >
                    &times;
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventListing;
