const Page = props => <div className="Page">
  <div className="Page-header">
    <h1>Events</h1>
  </div>
  <div className="Page-main">
    <Events events={props.events} />
  </div>
  <div className="Page-footer">
  </div>
</div>

export default Page;
