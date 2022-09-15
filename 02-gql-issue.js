const gql = `
{
  name
  points
  cities {
    name
    points
    parishes {
      name
      points
    }
  }
  states {
    name
    points
    cities {
      name
      points
      country {
        name
        points
        states {
            name
            points
        }
      }
    }
  }
}
`;

console.log(JSON.parse(gql));
