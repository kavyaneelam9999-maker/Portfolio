import React, { Component } from "react";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      message: "",
      submitted: false,
      error: null
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // Simulate a successful submission
    this.setState({ submitted: true, error: null });
    // In a real app, you would send the data to a backend or email service here
  };

  render() {
    return (
      <section id="contact" className="pb-5">
        <div className="col-md-8 mx-auto">
          <h1 className="section-title" style={{ color: "#353239", textAlign: "center", fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: '2.2rem', marginBottom: '1.5rem' }}>
            Contact
          </h1>
          <div className="contact-card">
            <p style={{ fontSize: "1.2rem", color: "#333", marginBottom: '1.5rem' }}>
              Feel free to reach out for collaboration, project inquiries, or just to say hello!
            </p>
            <ul>
              <li><strong>Email:</strong> <a href="mailto:kavyaneelam9999@gmail.com">kavyaneelam9999@gmail.com</a></li>
              <li><strong>Phone:</strong> <a href="tel:+ 1 (984)-563-1234">+ 1 (984)-563-1234</a></li>
              <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/kavya-neelam" target="_blank" rel="noopener noreferrer">linkedin.com/in/kavya-neelam</a></li>
              <li><strong>GitHub:</strong> <a href="https://github.com/kavyaneelam9999-maker" target="_blank" rel="noopener noreferrer">github.com/kavyaneelam</a></li>
            </ul>
            <hr style={{ margin: '2rem 0' }} />
            <h2 style={{ fontSize: '1.3rem', color: '#353239', marginBottom: '1rem' }}>Send a Message</h2>
            {this.state.submitted ? (
              <div style={{ color: '#009688', fontWeight: 600, marginBottom: '1rem' }}>Thank you for your message! I will get back to you soon.</div>
            ) : (
              <form onSubmit={this.handleSubmit}>
                <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={this.state.name}
                    onChange={this.handleChange}
                    required
                    style={{ flex: 1, padding: '0.7rem', borderRadius: '6px', border: '1px solid #e0e0e0' }}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    required
                    style={{ flex: 1, padding: '0.7rem', borderRadius: '6px', border: '1px solid #e0e0e0' }}
                  />
                </div>
                <div style={{ marginBottom: '1rem' }}>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Your Phone Number"
                    value={this.state.phone}
                    onChange={this.handleChange}
                    style={{ width: '100%', padding: '0.7rem', borderRadius: '6px', border: '1px solid #e0e0e0' }}
                  />
                </div>
                <div style={{ marginBottom: '1rem' }}>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={this.state.message}
                    onChange={this.handleChange}
                    required
                    rows={4}
                    style={{ width: '100%', padding: '0.7rem', borderRadius: '6px', border: '1px solid #e0e0e0', resize: 'vertical' }}
                  />
                </div>
                <button type="submit" style={{ background: 'linear-gradient(135deg, #a8edea 0%, #0093e9 100%)', color: '#fff', border: 'none', borderRadius: '6px', padding: '0.8rem 2.2rem', fontWeight: 600, fontSize: '1.1rem', cursor: 'pointer', boxShadow: '0 2px 8px rgba(34,193,195,0.10)' }}>
                  Send Message
                </button>
                {this.state.error && <div style={{ color: 'red', marginTop: '1rem' }}>{this.state.error}</div>}
              </form>
            )}
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
