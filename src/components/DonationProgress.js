function DonationProgress() {
  const raised = 75000;
  const goal = 100000;
  const percentage = (raised / goal) * 100;

  return (
    <section id="donation-progress" className="py-5 section-dark">
      <div className="container text-center">
        <h2 className="mb-4">Fundraising Progress</h2>

        <h4>
          ₹{raised.toLocaleString()} raised of ₹{goal.toLocaleString()}
        </h4>

        <div
          className="progress mt-4"
          style={{ height: "30px" }}
        >
          <div
            className="progress-bar progress-bar-striped progress-bar-animated"
            role="progressbar"
            style={{ width: `${percentage}%` }}
          >
            {Math.round(percentage)}%
          </div>
        </div>

        <p className="mt-3">
          Help us reach our goal and support more children and families.
        </p>

        <a href="#donation" className="btn btn-primary">
          Donate Now
        </a>
      </div>
    </section>
  );
}

export default DonationProgress;