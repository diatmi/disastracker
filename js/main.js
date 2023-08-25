let __counter = 0;

function next() {
  return __counter++;
}

class Screen {
  static HOME = next();
  static DISASTER = next();
  static DISASTER_DETAIL = next();
  static GOOD_NEWS = next();
  static GOOD_NEWS_DETAIL = next();
}


