module.exports = function Scorecard(currScore) {
  this.clue1 = currScore.clue1;
  this.clue2 = currScore.clue2;
  this.clue3 = currScore.clue3;
  this.clue4 = currScore.clue4;
  this.clue5 = currScore.clue5;
  this.clue6 = currScore.clue6;
  this.chapterAccess = currScore.chapterAccess;

  this.found = function(id)
  {
    if (id == 'clue-10')
    {
      this.clue1 = true;
    }
    else if (id == 'clue-12')
    {
      this.clue2 = true;
    }
    else if (id == 'clue-4')
    {
      this.clue3 = true;
    }
    else if (id == 'clue-1')
    {
      this.clue4 = true;
    }
    else if (id == 'clue-5')
    {
      this.clue5 = true;
    }
    else if (id == 'clue-11')
    {
      this.clue6 = true;
    }
    else
    {
      console.log("Found before");
    }
  }
}
