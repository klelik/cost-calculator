angular
  .module("extensionCalculatorApp", ['ngAnimate'])
  .controller("CalculatorController", function ($scope, $timeout) {
    const vm = this;

    vm.currentStep = 1;
    vm.progressWidth = "33%";

    vm.selections = {
      house: null,
      extensions: [],
      roofs: []
    };

    vm.priceBreakdown = {
      house: 0,
      extension: 0,
      roof: 0
    };

    vm.houseTypes = [
      {
        name: "Detached",
        selected: false,
        imageUrl: "/assets/houses/3D-detached.webp",
        price: 100
      },
      {
        name: "Semi-Detached",
        selected: false,
        imageUrl: "/assets/houses/3D-semi-detached.webp",
        price: 100
      },
      {
        name: "End of Terrace",
        selected: false,
        imageUrl: "/assets/houses/3D-end-of-tarrace.webp",
        price: 100
      },
      {
        name: "Terraced-Flat Back",
        selected: false,
        imageUrl: "/assets/houses/3D-Flatback.webp",
        price: 100
      },
      {
        name: "Terraced - L Shaped",
        selected: false,
        imageUrl: "/assets/houses/3D-terraced-l-shape.webp",
        price: 100
      }
    ];

    vm.extensionTypes = [
      {
        name: "Rear Extension",
        selected: false,
        imageUrl: "/assets/extensions/extension-detached.png",
        price: 200
      },
      {
        name: "Side & Rear Extension",
        selected: false,
        imageUrl: "/assets/extensions/extension-side-and-rear.webp",
        price: 400
      },
      {
        name: "Side Extension",
        selected: false,
        imageUrl: "/assets/extensions/extension-Pitched.webp",
        price: 200
      },
      {
        name: "Wraparound Extension",
        selected: false,
        imageUrl: "/assets/extensions/extension-wraparound.webp",
        price: 300
      }
    ];

    vm.roofTypes = [
      {
        name: "Flat Roof",
        selected: false,
        imageUrl: "/assets/roofs/Flat-back.webp",
        price: 300
      },
      {
        name: "Crown Roof",
        selected: false,
        imageUrl: "/assets/roofs/Rear-extension.webp",
        price: 300
      },
      {
        name: "Gable Roof",
        selected: false,
        imageUrl: "/assets/roofs/Gable-roof.webp",
        price: 300
      },
      {
        name: "Pitched Roof",
        selected: false,
        imageUrl: "/assets/roofs/Pitched.webp",
        price: 300
      },
      {
        name: "Pitched & Flat Roof",
        selected: false,
        imageUrl: "/assets/roofs/Side-and-rear.webp",
        price: 300
      },
      {
        name: "Pitched (Hip) Roof",
        selected: false,
        imageUrl: "/assets/roofs/Pitched-hip.webp",
        price: 300
      }
    ];

    vm.finalSelections = [
      // {
      //   name: "FLAT ROOF",
      //   description: "Medium Rear Extension",
      //   houseType:[ "Detached"],
      //   extensionType: ["Rear Extension"],
      //   roofType:[ "Flat Roof"],
      //   imageUrl: "/assets/final/flat-roof2.jpg",
      //   price: "115,000"
      // },
      {
        name: "FLAT ROOF",
        description: "Medium Smaller Rear Extension",
        houseType: ["Detached"],
        extensionType: ["Rear Extension"],
        roofType: ["Flat Roof"],
        imageUrl: "/assets/final/flat-roof1.jpg",
        price: "77,000"
      },
      //detatched - wraparound 
      {
        name: "FLAT ROOF",
        description: "Large Wraparound Extension",
        houseType: ["Detached"],
        extensionType: ["Wraparound Extension"],
        roofType: ["Flat Roof"],
        imageUrl: "/assets/final/large-wraparound1.png",
        price: "77,000"
      },
      {
        name: "CROWN ROOF",
        description: "Large Wraparound Extension",
        houseType: ["Detached"],
        extensionType: ["Wraparound Extension"],
        roofType: ["Crown Roof"],
        imageUrl: "/assets/final/large-wraparound2.png",
        price: "120,000"
      },
      //Semi-detached - rear extension (except from rear no other extensions)
      {
        name: "FLAT ROOF",
        description: "Medium Rear Extension",
        houseType: ["Semi-Detached", "Detached"],
        extensionType: ["Rear Extension"],
        roofType: ["Flat Roof"],
        imageUrl: "/assets/final/rear1.png",
        price: "115,000"
      },
      {
        name: "CROWN ROOF",
        description: "Medium Rear Extension",
        houseType: ["Semi-Detached", "Detached"],
        extensionType: ["Rear Extension"],
        roofType: ["Crown Roof"],
        imageUrl: "/assets/final/rear-crown1.png",
        price: "120,000"
      },
      //here
      // flatBack - rear -all
      {
        name: "PITCHED ROOF",
        description: "3m Rear Extension",
        houseType: ["Semi-Detached", "Terraced-Flat Back", "End of Terrace"],
        extensionType: ["Rear Extension"],
        roofType: ["Pitched Roof"],
        imageUrl: "/assets/final/rear2.png",
        price: "80,000"
      },
      {
        name: "GABLE ROOF",
        description: "3m Rear Extension",
        houseType: ["Semi-Detached", "Terraced-Flat Back", "End of Terrace"],
        extensionType: ["Rear Extension"],
        roofType: ["Gable Roof"],
        imageUrl: "/assets/final/rear-gable.png",
        price: "83,000"
      },
      {
        name: "FLAT ROOF",
        description: "3m Rear Extension",
        houseType: ["Semi-Detached", "Terraced-Flat Back", "End of Terrace"],
        extensionType: ["Rear Extension"],
        roofType: ["Flat Roof"],
        imageUrl: "/assets/final/rear3.png",
        price: "82,000"
      },
      {
        name: "CROWN ROOF",
        description: "3m Rear Extension",
        houseType: ["Semi-Detached", "Terraced-Flat Back", "End of Terrace"],
        extensionType: ["Rear Extension"],
        roofType: ["Crown Roof"],
        imageUrl: "/assets/final/rear-crown2.png",
        price: "85,000"
      },
      // End Terrace - Rear + side 
      {
        name: "FLAT ROOF",
        description: "3m x 3m Rear Extension",
        houseType: ["End of Terrace", "Terraced - L Shaped"],
        extensionType: ["Rear Extension"],
        roofType: ["Flat Roof"],
        imageUrl: "/assets/final/end-rear-flat1.png",
        price: "67,000"
      },
      ///////// 
      // End Terrace - side & rear - pitched and flat
      {
        name: "PITCHED & FLAT ROOF",
        description: "Large Side & Rear Extension",
        houseType: ["End of Terrace", "Terraced - L Shaped"],
        extensionType: ["Side & Rear Extension"],
        roofType: ["Pitched & Flat Roof"],
        imageUrl: "/assets/final/end-sideRear-pitchedFlat1.png",
        price: "112,000"
      },
      {
        name: "PITCHED & FLAT ROOF",
        description: "Medium Side & Rear Extension",
        houseType: ["End of Terrace", "Terraced - L Shaped"],
        extensionType: ["Side & Rear Extension"],
        roofType: ["Pitched & Flat Roof"],
        imageUrl: "/assets/final/end-sideRear-pitchedFlat2.png",
        price: "95,000"
      },
      {
        name: "PITCHED & FLAT ROOF",
        description: "Small Side & Rear Extension",
        houseType: ["End of Terrace", "Terraced - L Shaped"],
        extensionType: ["Side & Rear Extension"],
        roofType: ["Pitched & Flat Roof"],
        imageUrl: "/assets/final/end-sideRear-pitchedFlat3.png",
        price: "83,000"
      },
      //////////////////////////////
      // End Terrace - side - flat (3)
      {
        name: "FLAT ROOF",
        description: "Large Side Return",
        houseType: ["End of Terrace", "Terraced - L Shaped"],
        extensionType: ["Side Extension"],
        roofType: ["Flat Roof"],
        imageUrl: "/assets/final/end-side-flat1.png",
        price: "80,000"
      },
      {
        name: "FLAT ROOF",
        description: "Medium Side Return",
        houseType: ["End of Terrace", "Terraced - L Shaped"],
        extensionType: ["Side Extension"],
        roofType: ["Flat Roof"],
        imageUrl: "/assets/final/end-side-flat2.png",
        price: "69,000"
      },
      {
        name: "FLAT ROOF",
        description: "Small Side Return",
        houseType: ["End of Terrace", "Terraced - L Shaped"],
        extensionType: ["Side Extension"],
        roofType: ["Flat Roof"],
        imageUrl: "/assets/final/end-side-flat3.png",
        price: "68,000"
      },
      // End Terrace - side - pitched (3)
      {
        name: "PITCHED ROOF",
        description: "Large Side Return",
        houseType: ["End of Terrace", "Terraced - L Shaped"],
        extensionType: ["Side Extension"],
        roofType: ["Pitched Roof"],
        imageUrl: "/assets/final/end-side-pitched1.png",
        price: "78,000"
      },
      {
        name: "PITCHED ROOF",
        description: "Medium Side Return",
        houseType: ["End of Terrace", "Terraced - L Shaped"],
        extensionType: ["Side Extension"],
        roofType: ["Pitched Roof"],
        imageUrl: "/assets/final/end-side-pitched2.png",
        price: "68,000"
      },
      {
        name: "PITCHED ROOF",
        description: "Small Side Return",
        houseType: ["End of Terrace", "Terraced - L Shaped"],
        extensionType: ["Side Extension"],
        roofType: ["Pitched Roof"],
        imageUrl: "/assets/final/end-side-pitched3.png",
        price: "67,000"
      },
      // End Terrace - wraparound - flat (3) 

      {
        name: "FLAT ROOF",
        description: "Large Wraparound Extension",
        houseType: ["End of Terrace", "Terraced - L Shaped"],
        extensionType: ["Wraparound Extension"],
        roofType: ["Flat Roof"],
        imageUrl: "/assets/final/end-wraparound-flat1.png",
        price: "118,000"
      },
      {
        name: "FLAT ROOF",
        description: "Medium Wraparound Extension",
        houseType: ["End of Terrace", "Terraced - L Shaped"],
        extensionType: ["Wraparound Extension"],
        roofType: ["Flat Roof"],
        imageUrl: "/assets/final/end-wraparound-flat2.png",
        price: "100,000"
      },
      {
        name: "FLAT ROOF",
        description: "Small Wraparound Extension",
        houseType: ["End of Terrace", "Terraced - L Shaped"],
        extensionType: ["Wraparound Extension"],
        roofType: ["Flat Roof"],
        imageUrl: "/assets/final/end-wraparound-flat3.png",
        price: "87,000"
      },
      // End Terrace - wraparound - gable (3) 

      {
        name: "GABLE ROOF",
        description: "Large Wraparound Extension",
        houseType: ["End of Terrace", "Terraced - L Shaped"],
        extensionType: ["Wraparound Extension"],
        roofType: ["Gable Roof"],
        imageUrl: "/assets/final/end-wraparound-gable1.png",
        price: "112,000"
      },
      {
        name: "GABLE ROOF",
        description: "Medium Wraparound Extension",
        houseType: ["End of Terrace", "Terraced - L Shaped"],
        extensionType: ["Wraparound Extension"],
        roofType: ["Gable Roof"],
        imageUrl: "/assets/final/end-wraparound-gable2.png",
        price: "97,000"
      },
      {
        name: "GABLE ROOF",
        description: "Small Wraparound Extension",
        houseType: ["End of Terrace", "Terraced - L Shaped"],
        extensionType: ["Wraparound Extension"],
        roofType: ["Gable Roof"],
        imageUrl: "/assets/final/end-wraparound-gable3.png",
        price: "86,000"
      },
      // End Terrace - wraparound - pitched(hip) (3) 
      {
        name: "PITCHED (HIP) ROOF",
        description: "Large Wraparound Extension",
        houseType: ["End of Terrace", "Terraced - L Shaped"],
        extensionType: ["Wraparound Extension"],
        roofType: ["Pitched (Hip) Roof"],
        imageUrl: "/assets/final/end-wraparound-hip1.png",
        price: "112,000"
      },
      {
        name: "PITCHED (HIP) ROOF",
        description: "Medium Wraparound Extension",
        houseType: ["End of Terrace", "Terraced - L Shaped"],
        extensionType: ["Wraparound Extension"],
        roofType: ["Pitched (Hip) Roof"],
        imageUrl: "/assets/final/end-wraparound-hip2.png",
        price: "97,000"
      },
      {
        name: "PITCHED (HIP) ROOF",
        description: "Small Wraparound Extension",
        houseType: ["End of Terrace", "Terraced - L Shaped"],
        extensionType: ["Wraparound Extension"],
        roofType: ["Pitched (Hip) Roof"],
        imageUrl: "/assets/final/end-wraparound-hip3.png",
        price: "85,000"
      },
      // flatBack - rear -all - same as semi - detached, except one -> houseType:[ "Semi-Detached","Terraced-Flat Back"]      
    ];

    vm.toggleSelection = function (item, list) {
      list.forEach((i) => (i.selected = false));
      item.selected = true;
    };

    vm.filteredSelections = angular.copy(vm.finalSelections);

    vm.updateFilteredSelections = function () {

      const selectedHouse = vm.selections.house ? vm.selections.house.name : null;
      const selectedExtensions = vm.selections.extensions.map(ext => ext.name);
      const selectedRoofs = vm.selections.roofs.map(roof => roof.name);

      console.log("Selected House:", selectedHouse);
      console.log("Selected Extensions:", selectedExtensions);
      console.log("Selected Roofs:", selectedRoofs);

      vm.filteredSelections = vm.finalSelections.filter(item => {
        const houseMatches = !selectedHouse || item.houseType.includes(selectedHouse);
        const extensionsMatch = selectedExtensions.length === 0 || item.extensionType.some(ext => selectedExtensions.includes(ext));
        const roofsMatch = selectedRoofs.length === 0 || item.roofType.some(roof => selectedRoofs.includes(roof));

        // Log for debugging
        // console.log("For item:", item.name);
        // console.log("- House matches:", houseMatches);
        // console.log("- Extensions match:", extensionsMatch);
        // console.log("- Roofs match:", roofsMatch);
        return houseMatches && extensionsMatch && roofsMatch;
      });

      // Checking the result
      console.log("Filtered Selections after update:", vm.filteredSelections);
    }

    //keep a copy so the arrays dont get mutated 
    vm.originalExtensionTypes = angular.copy(vm.extensionTypes);
    vm.originalRoofTypes = angular.copy(vm.roofTypes);
    function getPossibleExtensions(houseType) {
      let extensions = new Set(); // unique values only
      for (let item of vm.finalSelections) {
        if (item.houseType.includes(houseType)) {
          item.extensionType.forEach(ext => extensions.add(ext));
        }
      }
      return Array.from(extensions);
    }

    function getPossibleRoofs(houseType, extensionNames) {
      let roofs = new Set();
      for (let item of vm.finalSelections) {
        if (item.houseType.includes(houseType) && extensionNames.some(extName => item.extensionType.includes(extName))) {
          item.roofType.forEach(roof => roofs.add(roof));
        }
      }
      return Array.from(roofs);
    }

    vm.selectHouseType = function (house) {
      vm.houseTypes.forEach(h => h.selected = false);  // Deselect all
      house.selected = true;  // Select clicked one
      vm.selections.house = house;
      vm.priceBreakdown.house = house.price;
      vm.updateFilteredSelections();
      // filter down 
      if (vm.selections.house) {
        let houseName = vm.selections.house.name;
        let possibleExtensions = getPossibleExtensions(houseName);
        vm.extensionTypes = vm.originalExtensionTypes.filter(ext => possibleExtensions.includes(ext.name));
      }
      console.log(vm.extensionTypes, "extensionTypes");
    };

    vm.selectExtensionType = function (extension) {
      let index = vm.selections.extensions.indexOf(extension);
      if (index > -1) {
        // If the extension is selected, deselect it
        vm.selections.extensions.splice(index, 1);
        extension.selected = false;
      } else {
        // If not, select it
        vm.selections.extensions.push(extension);
        extension.selected = true;
      }

      // Filter down roof types based on selected house and extensions
      if (vm.selections.house && vm.selections.extensions.length) {
        let houseName = vm.selections.house.name;
        let extensionNames = vm.selections.extensions.map(ext => ext.name);
        let possibleRoofs = getPossibleRoofs(houseName, extensionNames);
        vm.roofTypes = vm.originalRoofTypes.filter(roof => possibleRoofs.includes(roof.name));
      }
      vm.updateFilteredSelections();

      console.log(vm.selections, "selections");
    };

    vm.selectRoofType = function (roof) {
      let index = vm.selections.roofs.indexOf(roof);
      if (index > -1) {
        // If the roof is already selected, deselect it
        vm.selections.roofs.splice(index, 1);
        roof.selected = false;
      } else {
        // If not, select it
        vm.selections.roofs.push(roof);
        roof.selected = true;
      }
      vm.updateFilteredSelections();
    };

    vm.moveToNextStep = function () {
      if (vm.currentStep < 4) {
        vm.currentStep++;
        updateProgressBar();
        console.log(vm.selections, "selections")
      }
    };

    vm.goBack = function () {
      if (vm.currentStep > 1) {
        vm.currentStep--;
        updateProgressBar();
      }
    }

    vm.goToStep = function (stepNumber) {
      if (vm.currentStep >= stepNumber) {
        vm.currentStep = stepNumber;
        // Adjust the progress width accordingly
        updateProgressBar()
      }
    };

    function updateProgressBar() {
      switch (vm.currentStep) {
        case 1:
          vm.progressWidth = '33%';
          break;
        case 2:
          vm.progressWidth = '66%';
          break;
        case 3:
          vm.progressWidth = '100%';
          break;
        case 4:
          vm.progressWidth = '100%';
          break;
        default:
          vm.progressWidth = '0%';
      }
    }
    updateProgressBar();

    vm.resetCalculator = function () {
      // Reset to the initial filteredSelections.
      vm.currentStep = 1;
      updateProgressBar();
    };

    //for loader
    vm.isLoading = false;
    $scope.$watch('vm.filteredSelections', function (newVal, oldVal) {
      if (newVal !== oldVal) {
        vm.isLoading = true;
        $timeout(function () {
          vm.isLoading = false;
        }, 600);
      }
    });

    vm.findCostAndShowSelections = function () {
      document.getElementById('selections').scrollIntoView({ behavior: 'smooth' });
    }

    vm.showAll = function () {
      document.getElementById('all').scrollIntoView({ behavior: 'smooth' });
    }

    $scope.isElementInView = function (elem) {
      var docViewTop = $(window).scrollTop();
      var docViewBottom = docViewTop + $(window).height();
      var elemTop = $(elem).offset().top;

      return (elemTop <= docViewBottom);
    }

    $(window).scroll(function () {
      $(".final-item").each(function () {
        if ($scope.isElementInView($(this))) {
          $(this).addClass("fade-in");
        }
      });
    });

  });
