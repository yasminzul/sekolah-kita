module.exports = function Scorecard(currScore) {
  this.clue = currScore.clue;
  this.chapterAccess = currScore.chapterAccess;
  this.cluesFound = currScore.cluesFound;

  this.found = function(id)
  {
    if (id == 'clue-1')
    {
      this.clue[0] = true;
    }
    else if (id == 'clue-2')
    {
      this.clue[1] = true;
    }
    else if (id == 'clue-3')
    {
      this.clue[2] = true;
    }
    else if (id == 'clue-4')
    {
      this.clue[3] = true;
    }
    else if (id == 'clue-5')
    {
      this.clue[4] = true;
    }
    else if (id == 'clue-6')
    {
      this.clue[5] = true;
    }
    else if (id == 'clue-7')
    {
      this.clue[6] = true;
    }
    else if (id == 'clue-8')
    {
      this.clue[7] = true;
    }
    else if (id == 'clue-9')
    {
      this.clue[8] = true;
    }
    else if (id == 'clue-10')
    {
      this.clue[9] = true;
    }
    else if (id == 'clue-11')
    {
      this.clue[10] = true;
    }
    else if (id == 'clue-12')
    {
      this.clue[11] = true;
    }

    this.cluesFound = 0;

    for (let i = 0; i < 12; i++)
    {
      if (this.clue[i] == true)
      {
          this.cluesFound++;
          console.log(this.cluesFound);
      }
    }

  }
}
