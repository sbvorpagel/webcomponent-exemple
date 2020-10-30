import { Component, Prop, h, State } from '@stencil/core';

@Component({
  tag: 'card-user',
  styleUrl: 'card-user.css',
  shadow: true,
})
export class CardUser {

  @Prop() email: string;
  @Prop() name: string;
  @Prop() phone: string;
  @Prop() avatar: string;

  @State() showInfo = true;
  @State() buttonName = "Hide Info";

  toggleEvent = () => {
    this.showInfo = !this.showInfo;

    if (this.showInfo) {
      this.buttonName = "Hide Info";
    } else {
      this.buttonName = "Show Info";
    }
  }

  render() {
    return (
      <div class="user-card">
        <img src={this.avatar}/>
        <div>
            <h3>{this.name}</h3>
            {!!this.showInfo && (
              <div class="info">
                <p>{this.email}</p>
                <p>{this.phone}</p>
              </div>
            )}
            <button onClick={this.toggleEvent}>{this.buttonName}</button>
        </div>
      </div>
    );
  }

}
