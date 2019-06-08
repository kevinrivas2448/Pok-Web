var Pokemon = angular.module("Pokemon",[]);
Pokemon.controller("Pokecontrol",function($scope,$rootScope,$http){

  $scope.PokeData =[];

  for(var i=1;i<=800;i++){
    $http({
      method : "GET",
      url : "https://pokeapi.co/api/v2/pokemon/"+i
    }).then(function Datos(p){
      console.log(p);
      $scope.PokeData.push(p)
    })
  }
})
