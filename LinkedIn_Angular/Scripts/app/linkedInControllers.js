var linkedInControllers = angular.module("linkedInControllers", []);

linkedInControllers.controller('linkedInController', [
    "$scope", function ($scope) {
        $scope.pictureUrl = "https://media.licdn.com/mpr/mprx/0_in1UQZq1D2L9gxsZTrlHQRq0fH39lxsZS-FXQR1hrIz6mRS47KiBHUba38Td-ZUNGvA5WyDdzsNZ";
        $scope.formattedName = "Aaron Rieger";
        $scope.professionalSummary = "Passionate, progressive and committed full stack software engineer with over 5 years’ experience designing, developing, and implementing software solutions utilizing Microsoft technologies including C#, ASP.NET MVC, and Microsoft SQL Server.↵↵Experienced in developing creative, responsive, and scalable web applications using front end frameworks including HTML5, AngularJs, Bootstrap, jQuery, Javascript, and 3rd party libraries such as DevExpress and Telerik Kendo UI.↵↵Extensive work implementing distributed, multi-tier, service oriented architectures through the use of Microsoft technologies including Web API (REST) and WCF (SOAP).↵↵Proficient in developing persistent database driven applications integrating Microsoft SQL Server, Oracle, and PostgreSQL databases through various ORMs including Entity Framework and ADO.NET.↵↵Relentless, entrepreneurial spirit with a passion for learning new technologies in order to provide the most accurate, efficient, and user friendly technology solutions.";
        $scope.phoneNumbers = [
            { phoneType: "Mobile", phoneNumber: "254-855-3305" },
            { phoneType: "Home", phoneNumber: "254-855-6043" }
        ];
        $scope.email = "aaron.rieger5@gmail.com";
        $scope.positions = [
            {
                company: {
                    name: "ALS Oil & Gas"
                },
                startDate: {
                    month: 1,
                    year: 2015
                },
                title: "Software Engineer",
                summary: "This is a summary"
            }
        ];
        $scope.educations = [
            { degree: "MBA", schoolName: "Tarleton State University", fieldOfStudy: "Management Information Systems" },
            { degree: "BS", schoolName: "Tarleton State University", fieldOfStudy: "Applied Science" }
        ];
    }
]);