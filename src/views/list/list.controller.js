import { getList } from './../../api/zhuhu-daily';

export default class List {
    constructor($scope) {
        this.$scope = $scope;
        this.list = null;
    }

    $onInit() {
        this.getData();
    }

    getData() {
        getList({}).then(data => {
            if (data)
                // 由于用 axios 代替了 angularJS 内置的 $http ,所以在回调里面要用手动调用 $apply 来更新视图
                this.$scope.$apply(() => {
                    this.list = data.stories;
                });
        });
    }
}


List.$inject = ['$scope']
