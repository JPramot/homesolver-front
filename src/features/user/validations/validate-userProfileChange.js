const isUserProfileChange = (profile, newProfile) => {
  if (
    profile.firstName === newProfile.firstName &&
    profile.lastName === newProfile.lastName &&
    profile.alias === newProfile.alias &&
    profile.birthDate === newProfile.birthDate &&
    profile.gender === newProfile.gender &&
    profile.introduction === newProfile.introduction
  )
    return false;
};

export default isUserProfileChange;
