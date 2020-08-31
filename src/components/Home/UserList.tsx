import * as React from "react";
interface Iprops {
  users?: any;
}

export class UserList extends React.Component<Iprops, {}> {
  constructor(props: any) {
    super(props);
  }

   render() {
    const { users }: any = this.props;

    return (
      <div>
        <h2>List of Usernames of Users</h2>
        <p>(Saved on Sign Up in Firebase Database)</p>

        {Object.keys(users).map(key => (
          <div key={key}>{users[key].username}</div>
        ))}
      </div>
    );
  }
}
