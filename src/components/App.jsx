import Profile from "./Profile/UserProfile";
import user from "./Profile/user.json";

import Statistics from "./Statistics/Statistics";
import data from "./Statistics/data.json";

import Friend from "./FriendList/Friend";
import friends from "./FriendList/friends.json";

import TransactionHistory from "./TransactionHistory/TransactionHistory";
import transactions from "./TransactionHistory/transactions.json";

export const App = () => {
  return (
    
    <div className = "App">
      <Profile 
      username = {user.username}
      tag = {user.tag}
      avatar = {user.avatar}
      location = {user.location}
      followers = {user.stats.followers}
      views = {user.stats.views}
      likes = {user.stats.likes}
      />
      <Statistics title = "Upload Stats" stats = {data} />
      <Friend friends = {friends} />
      <TransactionHistory items = {transactions} />
    </div>

  );
};
