module.exports = function Scorecard(currScore) {
  this.clue1 = currScore.clue1;
  this.clue2 = currScore.clue2;
  this.clue3 = currScore.clue3;
  this.clue4 = currScore.clue4;
  this.clue5 = currScore.clue5;
  this.clue6 = currScore.clue6;
  this.clue7 = currScore.clue7;
  this.clue8 = currScore.clue8;
  this.clue9 = currScore.clue9;
  this.clue10 = currScore.clue10;
  this.clue11 = currScore.clue11;
  this.clue12 = currScore.clue12;
  this.chapterAccess = currScore.chapterAccess;

  this.found = function(id)
  {
    if (id == 'clue-1')
    {
      this.clue1 = true;
    }
    else if (id == 'clue-2')
    {
      this.clue2 = true;
    }
    else if (id == 'clue-3')
    {
      this.clue3 = true;
    }
    else if (id == 'clue-4')
    {
      this.clue4 = true;
    }
    else if (id == 'clue-5')
    {
      this.clue5 = true;
    }
    else if (id == 'clue-6')
    {
      this.clue6 = true;
    }
    else if (id == 'clue-7')
    {
      this.clue7 = true;
    }
    else if (id == 'clue-8')
    {
      this.clue8 = true;
    }
    else if (id == 'clue-9')
    {
      this.clue9 = true;
    }
    else if (id == 'clue-10')
    {
      this.clue10 = true;
    }
    else if (id == 'clue-11')
    {
      this.clue11 = true;
    }
    else if (id == 'clue-12')
    {
      this.clue12 = true;
    }
    else
    {
      console.log("What?");
    }
  }
}
